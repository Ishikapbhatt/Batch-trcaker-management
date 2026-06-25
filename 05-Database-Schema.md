# Database Schema & ER Diagram - Training Institute Management Platform

## Executive Summary

This document provides the complete database schema for the Training Institute Management Platform (TIMP), including all tables, relationships, indexes, and constraints.

---

## 1. Database Overview

**Database Type:** PostgreSQL 15+  
**ORM:** Prisma / TypeORM  
**Naming Convention:** snake_case for tables and columns  
**Schema Design:** Normalized (3NF) with some denormalization for performance

---

## 2. Core Tables

### 2.1 Institute Table

```sql
CREATE TABLE institutes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) UNIQUE NOT NULL,
    domain VARCHAR(255) UNIQUE,
    subdomain VARCHAR(255) UNIQUE,
    logo_url VARCHAR(500),
    primary_color VARCHAR(7),
    secondary_color VARCHAR(7),
    contact_email VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(20),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20),
    timezone VARCHAR(50) DEFAULT 'UTC',
    currency VARCHAR(3) DEFAULT 'USD',
    status VARCHAR(20) DEFAULT 'active', -- active, suspended, deleted
    settings JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID,
    updated_by UUID
);

CREATE INDEX idx_institutes_code ON institutes(code);
CREATE INDEX idx_institutes_domain ON institutes(domain);
CREATE INDEX idx_institutes_status ON institutes(status);
```

### 2.2 Branch Table

```sql
CREATE TABLE branches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) NOT NULL,
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20),
    contact_person VARCHAR(255),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(20),
    capacity INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID,
    updated_by UUID,
    UNIQUE(institute_id, code)
);

CREATE INDEX idx_branches_institute_id ON branches(institute_id);
CREATE INDEX idx_branches_status ON branches(status);
```

### 2.3 Users Table

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    branch_id UUID REFERENCES branches(id) ON DELETE SET NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(20),
    profile_image_url VARCHAR(500),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20),
    role VARCHAR(50) NOT NULL, -- super_admin, admin, trainer, student, staff
    status VARCHAR(20) DEFAULT 'active', -- active, inactive, suspended, deleted
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    mfa_enabled BOOLEAN DEFAULT FALSE,
    mfa_secret VARCHAR(255),
    last_login_at TIMESTAMP,
    last_login_ip VARCHAR(45),
    failed_login_attempts INTEGER DEFAULT 0,
    locked_until TIMESTAMP,
    settings JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID,
    updated_by UUID
);

CREATE INDEX idx_users_institute_id ON users(institute_id);
CREATE INDEX idx_users_branch_id ON users(branch_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_status ON users(status);
```

### 2.4 Roles Table (for custom roles)

```sql
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    permissions JSONB NOT NULL,
    is_system_role BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(institute_id, name)
);

CREATE INDEX idx_roles_institute_id ON roles(institute_id);
```

### 2.5 User Roles Table (many-to-many)

```sql
CREATE TABLE user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    assigned_by UUID,
    UNIQUE(user_id, role_id)
);

CREATE INDEX idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX idx_user_roles_role_id ON user_roles(role_id);
```

---

## 3. Course Management Tables

### 3.1 Categories Table

```sql
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    description TEXT,
    icon_url VARCHAR(500),
    parent_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    sort_order INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(institute_id, slug)
);

CREATE INDEX idx_categories_institute_id ON categories(institute_id);
CREATE INDEX idx_categories_parent_id ON categories(parent_id);
```

### 3.2 Courses Table

```sql
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    description TEXT,
    short_description VARCHAR(500),
    thumbnail_url VARCHAR(500),
    video_preview_url VARCHAR(500),
    duration_hours INTEGER,
    difficulty_level VARCHAR(20), -- beginner, intermediate, advanced
    prerequisites TEXT,
    learning_objectives TEXT[],
    target_audience TEXT,
    language VARCHAR(10) DEFAULT 'en',
    price DECIMAL(10, 2) DEFAULT 0,
    discount_price DECIMAL(10, 2),
    currency VARCHAR(3) DEFAULT 'USD',
    installment_options JSONB,
    certificate_template_id UUID,
    recording_access_policy VARCHAR(50), -- immediate, after_completion, never
    content_protection_enabled BOOLEAN DEFAULT TRUE,
    completion_criteria JSONB,
    status VARCHAR(20) DEFAULT 'draft', -- draft, published, archived
    featured BOOLEAN DEFAULT FALSE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id),
    updated_by UUID REFERENCES users(id),
    UNIQUE(institute_id, code)
);

CREATE INDEX idx_courses_institute_id ON courses(institute_id);
CREATE INDEX idx_courses_category_id ON courses(category_id);
CREATE INDEX idx_courses_slug ON courses(slug);
CREATE INDEX idx_courses_status ON courses(status);
```

### 3.3 Modules Table

```sql
CREATE TABLE modules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    sort_order INTEGER NOT NULL,
    duration_hours INTEGER,
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_modules_course_id ON modules(course_id);
```

### 3.4 Lessons Table

```sql
CREATE TABLE lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    module_id UUID NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    lesson_type VARCHAR(50) NOT NULL, -- video, pdf, lab, assignment, assessment
    content_url VARCHAR(500),
    content_text TEXT,
    duration_minutes INTEGER,
    is_free BOOLEAN DEFAULT FALSE,
    is_published BOOLEAN DEFAULT FALSE,
    sort_order INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_lessons_module_id ON lessons(module_id);
CREATE INDEX idx_lessons_type ON lessons(lesson_type);
```

### 3.5 Lab Guides Table

```sql
CREATE TABLE lab_guides (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    instructions TEXT NOT NULL,
    cloud_provider VARCHAR(50), -- aws, azure, gcp
    cloud_lab_id VARCHAR(255),
    resources JSONB,
    difficulty_level VARCHAR(20),
    estimated_time_minutes INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_lab_guides_lesson_id ON lab_guides(lesson_id);
```

### 3.6 Assessments Table

```sql
CREATE TABLE assessments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    assessment_type VARCHAR(50), -- quiz, exam, assignment
    total_marks INTEGER NOT NULL,
    passing_marks INTEGER NOT NULL,
    duration_minutes INTEGER,
    attempt_limit INTEGER,
    show_correct_answers BOOLEAN DEFAULT TRUE,
    randomize_questions BOOLEAN DEFAULT FALSE,
    instructions TEXT,
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_assessments_lesson_id ON assessments(lesson_id);
CREATE INDEX idx_assessments_course_id ON assessments(course_id);
```

### 3.7 Questions Table

```sql
CREATE TABLE questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
    question_bank_id UUID,
    question_text TEXT NOT NULL,
    question_type VARCHAR(50) NOT NULL, -- multiple_choice, true_false, short_answer, code
    options JSONB,
    correct_answer TEXT,
    explanation TEXT,
    marks INTEGER NOT NULL,
    sort_order INTEGER DEFAULT 0,
    tags TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_questions_assessment_id ON questions(assessment_id);
CREATE INDEX idx_questions_question_bank_id ON questions(question_bank_id);
```

### 3.8 Question Banks Table

```sql
CREATE TABLE question_banks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    description TEXT,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_question_banks_institute_id ON question_banks(institute_id);
```

---

## 4. Batch Management Tables

### 4.1 Batches Table

```sql
CREATE TABLE batches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    branch_id UUID REFERENCES branches(id) ON DELETE SET NULL,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) NOT NULL,
    description TEXT,
    start_date DATE NOT NULL,
    end_date DATE,
    capacity INTEGER DEFAULT 50,
    enrolled_count INTEGER DEFAULT 0,
    timing VARCHAR(50), -- morning, evening, weekend, custom
    custom_timing VARCHAR(100),
    mode VARCHAR(20) DEFAULT 'online', -- online, offline, hybrid
    class_days VARCHAR(100), -- mon-fri, sat-sun, custom
    primary_trainer_id UUID REFERENCES users(id) ON DELETE SET NULL,
    secondary_trainer_id UUID REFERENCES users(id) ON DELETE SET NULL,
    status VARCHAR(20) DEFAULT 'upcoming', -- upcoming, active, completed, cancelled
    attendance_requirement_percentage INTEGER DEFAULT 75,
    minimum_passing_score INTEGER DEFAULT 60,
    recording_access_policy VARCHAR(50),
    certificate_criteria JSONB,
    holiday_calendar JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id),
    updated_by UUID REFERENCES users(id),
    UNIQUE(institute_id, code)
);

CREATE INDEX idx_batches_institute_id ON batches(institute_id);
CREATE INDEX idx_batches_branch_id ON batches(branch_id);
CREATE INDEX idx_batches_course_id ON batches(course_id);
CREATE INDEX idx_batches_primary_trainer_id ON batches(primary_trainer_id);
CREATE INDEX idx_batches_status ON batches(status);
CREATE INDEX idx_batches_dates ON batches(start_date, end_date);
```

### 4.2 Batch Students Table

```sql
CREATE TABLE batch_students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    enrollment_date DATE NOT NULL,
    enrollment_status VARCHAR(20) DEFAULT 'active', -- active, completed, dropped, transferred
    completion_date DATE,
    final_score DECIMAL(5, 2),
    certificate_issued BOOLEAN DEFAULT FALSE,
    certificate_id UUID,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(batch_id, student_id)
);

CREATE INDEX idx_batch_students_batch_id ON batch_students(batch_id);
CREATE INDEX idx_batch_students_student_id ON batch_students(student_id);
CREATE INDEX idx_batch_students_status ON batch_students(enrollment_status);
```

### 4.3 Batch Schedule Table

```sql
CREATE TABLE batch_schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
    module_id UUID REFERENCES modules(id) ON DELETE SET NULL,
    lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    scheduled_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    location VARCHAR(255),
    meeting_link VARCHAR(500),
    meeting_platform VARCHAR(50), -- zoom, google_meet, teams, custom
    meeting_id VARCHAR(255),
    trainer_id UUID REFERENCES users(id) ON DELETE SET NULL,
    status VARCHAR(20) DEFAULT 'scheduled', -- scheduled, in_progress, completed, cancelled
    recording_url VARCHAR(500),
    recording_status VARCHAR(20), -- not_started, processing, available, failed
    attendance_marked BOOLEAN DEFAULT FALSE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_batch_schedules_batch_id ON batch_schedules(batch_id);
CREATE INDEX idx_batch_schedules_trainer_id ON batch_schedules(trainer_id);
CREATE INDEX idx_batch_schedules_date ON batch_schedules(scheduled_date);
CREATE INDEX idx_batch_schedules_status ON batch_schedules(status);
```

---

## 5. Attendance Tables

### 5.1 Attendance Table

```sql
CREATE TABLE attendance (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_schedule_id UUID NOT NULL REFERENCES batch_schedules(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
    attendance_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL, -- present, absent, late, excused
    check_in_time TIMESTAMP,
    check_out_time TIMESTAMP,
    check_in_method VARCHAR(50), -- manual, qr_code, face_recognition, zoom, google_meet
    check_in_location_lat DECIMAL(10, 8),
    check_in_location_long DECIMAL(11, 8),
    marked_by UUID REFERENCES users(id),
    remarks TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(batch_schedule_id, student_id)
);

CREATE INDEX idx_attendance_batch_schedule_id ON attendance(batch_schedule_id);
CREATE INDEX idx_attendance_student_id ON attendance(student_id);
CREATE INDEX idx_attendance_batch_id ON attendance(batch_id);
CREATE INDEX idx_attendance_date ON attendance(attendance_date);
CREATE INDEX idx_attendance_status ON attendance(status);
```

### 5.2 Attendance QR Codes Table

```sql
CREATE TABLE attendance_qr_codes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_schedule_id UUID NOT NULL REFERENCES batch_schedules(id) ON DELETE CASCADE,
    qr_code_data VARCHAR(500) NOT NULL,
    qr_code_image_url VARCHAR(500),
    valid_from TIMESTAMP NOT NULL,
    valid_until TIMESTAMP NOT NULL,
    location_lat DECIMAL(10, 8),
    location_long DECIMAL(11, 8),
    location_radius_meters INTEGER DEFAULT 100,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_attendance_qr_codes_batch_schedule_id ON attendance_qr_codes(batch_schedule_id);
CREATE INDEX idx_attendance_qr_codes_validity ON attendance_qr_codes(valid_from, valid_until);
```

---

## 6. Assignment Tables

### 6.1 Assignments Table

```sql
CREATE TABLE assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
    lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    instructions TEXT,
    due_date TIMESTAMP NOT NULL,
    due_time TIME,
    max_marks INTEGER NOT NULL,
    allow_late_submission BOOLEAN DEFAULT FALSE,
    late_submission_penalty_percentage INTEGER DEFAULT 10,
    plagiarism_check_enabled BOOLEAN DEFAULT TRUE,
    ai_evaluation_enabled BOOLEAN DEFAULT FALSE,
    resources JSONB,
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_assignments_batch_id ON assignments(batch_id);
CREATE INDEX idx_assignments_lesson_id ON assignments(lesson_id);
CREATE INDEX idx_assignments_due_date ON assignments(due_date);
```

### 6.2 Assignment Submissions Table

```sql
CREATE TABLE assignment_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assignment_id UUID NOT NULL REFERENCES assignments(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    submission_status VARCHAR(20) DEFAULT 'submitted', -- submitted, late, resubmitted
    files JSONB,
    text_content TEXT,
    code_content TEXT,
    plagiarism_score DECIMAL(5, 2),
    ai_evaluation_score DECIMAL(5, 2),
    ai_feedback TEXT,
    marks_awarded DECIMAL(5, 2),
    feedback TEXT,
    evaluated_by UUID REFERENCES users(id),
    evaluated_at TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pending', -- pending, evaluated, resubmission_required
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(assignment_id, student_id)
);

CREATE INDEX idx_assignment_submissions_assignment_id ON assignment_submissions(assignment_id);
CREATE INDEX idx_assignment_submissions_student_id ON assignment_submissions(student_id);
CREATE INDEX idx_assignment_submissions_status ON assignment_submissions(status);
```

---

## 7. Recording Tables

### 7.1 Recordings Table

```sql
CREATE TABLE recordings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_schedule_id UUID REFERENCES batch_schedules(id) ON DELETE SET NULL,
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    video_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    duration_seconds INTEGER,
    file_size_bytes BIGINT,
    recording_source VARCHAR(50), -- zoom, google_meet, manual_upload
    recording_date DATE NOT NULL,
    topic_tags TEXT[],
    chapter_markers JSONB,
    transcript TEXT,
    ai_summary TEXT,
    access_policy VARCHAR(50), -- batch_only, course_only, institute_only, public
    download_allowed BOOLEAN DEFAULT FALSE,
    expiry_date DATE,
    views_count INTEGER DEFAULT 0,
    watch_time_seconds BIGINT DEFAULT 0,
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_recordings_batch_id ON recordings(batch_id);
CREATE INDEX idx_recordings_course_id ON recordings(course_id);
CREATE INDEX idx_recordings_recording_date ON recordings(recording_date);
CREATE INDEX idx_recordings_topic_tags ON recordings USING GIN(topic_tags);
```

### 7.2 Recording Access Logs Table

```sql
CREATE TABLE recording_access_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    recording_id UUID NOT NULL REFERENCES recordings(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    accessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    watch_duration_seconds INTEGER,
    ip_address VARCHAR(45),
    user_agent TEXT
);

CREATE INDEX idx_recording_access_logs_recording_id ON recording_access_logs(recording_id);
CREATE INDEX idx_recording_access_logs_user_id ON recording_access_logs(user_id);
```

---

## 8. Progress Tables

### 8.1 Student Progress Table

```sql
CREATE TABLE student_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
    module_id UUID REFERENCES modules(id) ON DELETE SET NULL,
    lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL,
    progress_percentage DECIMAL(5, 2) DEFAULT 0,
    completed_lessons_count INTEGER DEFAULT 0,
    total_lessons_count INTEGER DEFAULT 0,
    completed_assignments_count INTEGER DEFAULT 0,
    total_assignments_count INTEGER DEFAULT 0,
    completed_assessments_count INTEGER DEFAULT 0,
    total_assessments_count INTEGER DEFAULT 0,
    average_score DECIMAL(5, 2),
    last_accessed_at TIMESTAMP,
    enrollment_date DATE NOT NULL,
    completion_date DATE,
    status VARCHAR(20) DEFAULT 'in_progress', -- not_started, in_progress, completed
    UNIQUE(student_id, course_id, batch_id)
);

CREATE INDEX idx_student_progress_student_id ON student_progress(student_id);
CREATE INDEX idx_student_progress_course_id ON student_progress(course_id);
CREATE INDEX idx_student_progress_batch_id ON student_progress(batch_id);
CREATE INDEX idx_student_progress_status ON student_progress(status);
```

### 8.2 Lesson Progress Table

```sql
CREATE TABLE lesson_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    is_completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP,
    watch_duration_seconds INTEGER DEFAULT 0,
    last_position_seconds INTEGER DEFAULT 0,
    access_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(student_id, lesson_id)
);

CREATE INDEX idx_lesson_progress_student_id ON lesson_progress(student_id);
CREATE INDEX idx_lesson_progress_lesson_id ON lesson_progress(lesson_id);
```

---

## 9. Placement Tables

### 9.1 Student Profiles Table

```sql
CREATE TABLE student_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    highest_qualification VARCHAR(255),
    university_college VARCHAR(255),
    year_of_passing INTEGER,
    percentage_cgpa DECIMAL(5, 2),
    skills TEXT[],
    experience_years INTEGER DEFAULT 0,
    current_company VARCHAR(255),
    current_designation VARCHAR(255),
    linkedin_url VARCHAR(500),
    github_url VARCHAR(500),
    portfolio_url VARCHAR(500),
    resume_url VARCHAR(500),
    resume_uploaded_at TIMESTAMP,
    resume_score DECIMAL(5, 2),
    resume_feedback TEXT,
    job_preferences JSONB,
    expected_salary_min DECIMAL(10, 2),
    expected_salary_max DECIMAL(10, 2),
    preferred_locations TEXT[],
    notice_period_days INTEGER,
    is_actively_looking BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(student_id)
);

CREATE INDEX idx_student_profiles_student_id ON student_profiles(student_id);
CREATE INDEX idx_student_profiles_skills ON student_profiles USING GIN(skills);
```

### 9.2 Companies Table

```sql
CREATE TABLE companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    website VARCHAR(500),
    industry VARCHAR(100),
    company_size VARCHAR(50),
    contact_person VARCHAR(255),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(20),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    description TEXT,
    logo_url VARCHAR(500),
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_companies_institute_id ON companies(institute_id);
CREATE INDEX idx_companies_status ON companies(status);
```

### 9.3 Job Openings Table

```sql
CREATE TABLE job_openings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES companies(id) ON DELETE SET NULL,
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    requirements TEXT,
    responsibilities TEXT,
    skills_required TEXT[],
    experience_required_min INTEGER,
    experience_required_max INTEGER,
    salary_min DECIMAL(10, 2),
    salary_max DECIMAL(10, 2),
    location VARCHAR(255),
    job_type VARCHAR(50), -- full_time, part_time, contract, internship
    work_mode VARCHAR(50), -- on_site, remote, hybrid
    application_deadline DATE,
    vacancy_count INTEGER DEFAULT 1,
    status VARCHAR(20) DEFAULT 'open', -- open, closed, filled
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_job_openings_company_id ON job_openings(company_id);
CREATE INDEX idx_job_openings_institute_id ON job_openings(institute_id);
CREATE INDEX idx_job_openings_status ON job_openings(status);
CREATE INDEX idx_job_openings_deadline ON job_openings(application_deadline);
CREATE INDEX idx_job_openings_skills ON job_openings USING GIN(skills_required);
```

### 9.4 Job Applications Table

```sql
CREATE TABLE job_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_opening_id UUID NOT NULL REFERENCES job_openings(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    application_status VARCHAR(20) DEFAULT 'applied', -- applied, shortlisted, interview_scheduled, interview_completed, offered, rejected, withdrawn
    resume_url VARCHAR(500),
    cover_letter TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(job_opening_id, student_id)
);

CREATE INDEX idx_job_applications_job_opening_id ON job_applications(job_opening_id);
CREATE INDEX idx_job_applications_student_id ON job_applications(student_id);
CREATE INDEX idx_job_applications_status ON job_applications(application_status);
```

### 9.5 Interviews Table

```sql
CREATE TABLE interviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_application_id UUID NOT NULL REFERENCES job_applications(id) ON DELETE CASCADE,
    job_opening_id UUID NOT NULL REFERENCES job_openings(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    interview_type VARCHAR(50) NOT NULL, -- technical, hr, mock, final
    scheduled_date TIMESTAMP NOT NULL,
    duration_minutes INTEGER,
    interview_mode VARCHAR(50), -- video, in_person, phone
    meeting_link VARCHAR(500),
    location VARCHAR(255),
    interviewer_id UUID REFERENCES users(id) ON DELETE SET NULL,
    interviewer_name VARCHAR(255),
    interview_status VARCHAR(20) DEFAULT 'scheduled', -- scheduled, completed, cancelled, no_show
    feedback TEXT,
    rating DECIMAL(3, 2),
    outcome VARCHAR(50), -- selected, rejected, on_hold
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_interviews_job_application_id ON interviews(job_application_id);
CREATE INDEX idx_interviews_job_opening_id ON interviews(job_opening_id);
CREATE INDEX idx_interviews_student_id ON interviews(student_id);
CREATE INDEX idx_interviews_scheduled_date ON interviews(scheduled_date);
CREATE INDEX idx_interviews_status ON interviews(interview_status);
```

### 9.6 Offers Table

```sql
CREATE TABLE offers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_application_id UUID NOT NULL REFERENCES job_applications(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    company_id UUID REFERENCES companies(id) ON DELETE SET NULL,
    job_title VARCHAR(255) NOT NULL,
    offer_date DATE NOT NULL,
    salary_annual DECIMAL(10, 2),
    joining_date DATE,
    offer_letter_url VARCHAR(500),
    offer_status VARCHAR(20) DEFAULT 'pending', -- pending, accepted, rejected, withdrawn
    accepted_at DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_offers_job_application_id ON offers(job_application_id);
CREATE INDEX idx_offers_student_id ON offers(student_id);
CREATE INDEX idx_offers_company_id ON offers(company_id);
CREATE INDEX idx_offers_status ON offers(offer_status);
```

---

## 10. Fee Management Tables

### 10.1 Fee Structures Table

```sql
CREATE TABLE fee_structures (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    gst_percentage DECIMAL(5, 2) DEFAULT 0,
    discount_amount DECIMAL(10, 2) DEFAULT 0,
    installment_enabled BOOLEAN DEFAULT FALSE,
    installment_count INTEGER DEFAULT 1,
    installment_details JSONB,
    valid_from DATE,
    valid_until DATE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_fee_structures_course_id ON fee_structures(course_id);
CREATE INDEX idx_fee_structures_institute_id ON fee_structures(institute_id);
```

### 10.2 Student Fees Table

```sql
CREATE TABLE student_fees (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    fee_structure_id UUID REFERENCES fee_structures(id) ON DELETE SET NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    paid_amount DECIMAL(10, 2) DEFAULT 0,
    pending_amount DECIMAL(10, 2),
    discount_amount DECIMAL(10, 2) DEFAULT 0,
    gst_amount DECIMAL(10, 2) DEFAULT 0,
    fee_status VARCHAR(20) DEFAULT 'pending', -- pending, partial, paid, overdue, waived
    due_date DATE,
    last_payment_date DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_student_fees_student_id ON student_fees(student_id);
CREATE INDEX idx_student_fees_batch_id ON student_fees(batch_id);
CREATE INDEX idx_student_fees_status ON student_fees(fee_status);
CREATE INDEX idx_student_fees_due_date ON student_fees(due_date);
```

### 10.3 Fee Payments Table

```sql
CREATE TABLE fee_payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_fee_id UUID NOT NULL REFERENCES student_fees(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    payment_mode VARCHAR(50), -- online, cash, cheque, bank_transfer
    payment_gateway VARCHAR(50),
    transaction_id VARCHAR(255),
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_status VARCHAR(20) DEFAULT 'success', -- success, failed, pending, refunded
    receipt_url VARCHAR(500),
    invoice_url VARCHAR(500),
    refund_amount DECIMAL(10, 2),
    refund_date DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_fee_payments_student_fee_id ON fee_payments(student_fee_id);
CREATE INDEX idx_fee_payments_student_id ON fee_payments(student_id);
CREATE INDEX idx_fee_payments_payment_date ON fee_payments(payment_date);
CREATE INDEX idx_fee_payments_status ON fee_payments(payment_status);
```

---

## 11. Certificate Tables

### 11.1 Certificate Templates Table

```sql
CREATE TABLE certificate_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    template_url VARCHAR(500),
    background_image_url VARCHAR(500),
    layout_config JSONB,
    is_default BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_certificate_templates_institute_id ON certificate_templates(institute_id);
```

### 11.2 Certificates Table

```sql
CREATE TABLE certificates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
    certificate_template_id UUID REFERENCES certificate_templates(id) ON DELETE SET NULL,
    certificate_number VARCHAR(100) UNIQUE NOT NULL,
    issue_date DATE NOT NULL,
    expiry_date DATE,
    certificate_url VARCHAR(500),
    verification_url VARCHAR(500),
    blockchain_tx_hash VARCHAR(255),
    is_revoked BOOLEAN DEFAULT FALSE,
    revoked_at DATE,
    revocation_reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_certificates_student_id ON certificates(student_id);
CREATE INDEX idx_certificates_course_id ON certificates(course_id);
CREATE INDEX idx_certificates_batch_id ON certificates(batch_id);
CREATE INDEX idx_certificates_certificate_number ON certificates(certificate_number);
```

---

## 12. Communication Tables

### 12.1 Announcements Table

```sql
CREATE TABLE announcements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    branch_id UUID REFERENCES branches(id) ON DELETE SET NULL,
    batch_id UUID REFERENCES batches(id) ON DELETE SET NULL,
    course_id UUID REFERENCES courses(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    announcement_type VARCHAR(50), -- general, urgent, event, holiday
    target_audience VARCHAR(50), -- all, students, trainers, admins
    priority VARCHAR(20) DEFAULT 'normal', -- low, normal, high, urgent
    is_pinned BOOLEAN DEFAULT FALSE,
    pin_until DATE,
    attachments JSONB,
    publish_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expiry_at TIMESTAMP,
    status VARCHAR(20) DEFAULT 'published', -- draft, published, archived
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_announcements_institute_id ON announcements(institute_id);
CREATE INDEX idx_announcements_batch_id ON announcements(batch_id);
CREATE INDEX idx_announcements_publish_at ON announcements(publish_at);
CREATE INDEX idx_announcements_status ON announcements(status);
```

### 12.2 Notifications Table

```sql
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    notification_type VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    data JSONB,
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP,
    action_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);
CREATE INDEX idx_notifications_created_at ON notifications(created_at);
```

### 12.3 Notification Preferences Table

```sql
CREATE TABLE notification_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    email_enabled BOOLEAN DEFAULT TRUE,
    sms_enabled BOOLEAN DEFAULT TRUE,
    push_enabled BOOLEAN DEFAULT TRUE,
    in_app_enabled BOOLEAN DEFAULT TRUE,
    notification_types JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id)
);

CREATE INDEX idx_notification_preferences_user_id ON notification_preferences(user_id);
```

---

## 13. AI & Analytics Tables

### 13.1 AI Insights Table

```sql
CREATE TABLE ai_insights (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type VARCHAR(50) NOT NULL, -- student, batch, course, trainer
    entity_id UUID NOT NULL,
    insight_type VARCHAR(50) NOT NULL, -- risk_prediction, performance, attendance, engagement
    insight_data JSONB NOT NULL,
    confidence_score DECIMAL(5, 2),
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    valid_until TIMESTAMP,
    is_actioned BOOLEAN DEFAULT FALSE,
    actioned_at TIMESTAMP,
    action_taken TEXT
);

CREATE INDEX idx_ai_insights_entity ON ai_insights(entity_type, entity_id);
CREATE INDEX idx_ai_insights_type ON ai_insights(insight_type);
CREATE INDEX idx_ai_insights_generated_at ON ai_insights(generated_at);
```

### 13.2 Student Risk Scores Table

```sql
CREATE TABLE student_risk_scores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
    risk_score DECIMAL(5, 2) NOT NULL, -- 0-100, higher = higher risk
    risk_level VARCHAR(20), -- low, medium, high, critical
    factors JSONB, -- attendance, assignments, engagement, etc.
    calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(student_id, batch_id)
);

CREATE INDEX idx_student_risk_scores_student_id ON student_risk_scores(student_id);
CREATE INDEX idx_student_risk_scores_batch_id ON student_risk_scores(batch_id);
CREATE INDEX idx_student_risk_scores_risk_level ON student_risk_scores(risk_level);
```

### 13.3 Batch Health Scores Table

```sql
CREATE TABLE batch_health_scores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id UUID NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
    health_score DECIMAL(5, 2) NOT NULL, -- 0-100, higher = healthier
    attendance_score DECIMAL(5, 2),
    engagement_score DECIMAL(5, 2),
    performance_score DECIMAL(5, 2),
    completion_score DECIMAL(5, 2),
    factors JSONB,
    calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(batch_id)
);

CREATE INDEX idx_batch_health_scores_batch_id ON batch_health_scores(batch_id);
```

---

## 14. Audit & Logging Tables

### 14.1 Audit Logs Table

```sql
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institute_id UUID NOT NULL REFERENCES institutes(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50),
    entity_id UUID,
    old_values JSONB,
    new_values JSONB,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_logs_institute_id ON audit_logs(institute_id);
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
```

### 14.2 System Logs Table

```sql
CREATE TABLE system_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    log_level VARCHAR(20) NOT NULL, -- debug, info, warning, error, critical
    service VARCHAR(100),
    message TEXT NOT NULL,
    context JSONB,
    stack_trace TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_system_logs_log_level ON system_logs(log_level);
CREATE INDEX idx_system_logs_service ON system_logs(service);
CREATE INDEX idx_system_logs_created_at ON system_logs(created_at);
```

---

## 15. Integration Tables

### 15.1 Zoom Meetings Table

```sql
CREATE TABLE zoom_meetings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_schedule_id UUID NOT NULL REFERENCES batch_schedules(id) ON DELETE CASCADE,
    zoom_meeting_id VARCHAR(255) NOT NULL,
    zoom_meeting_url VARCHAR(500),
    zoom_host_id VARCHAR(255),
    start_url VARCHAR(500),
    join_url VARCHAR(500),
    meeting_password VARCHAR(50),
    status VARCHAR(20) DEFAULT 'scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_zoom_meetings_batch_schedule_id ON zoom_meetings(batch_schedule_id);
CREATE INDEX idx_zoom_meetings_zoom_meeting_id ON zoom_meetings(zoom_meeting_id);
```

### 15.2 Google Meet Table

```sql
CREATE TABLE google_meet (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_schedule_id UUID NOT NULL REFERENCES batch_schedules(id) ON DELETE CASCADE,
    event_id VARCHAR(255) NOT NULL,
    meet_link VARCHAR(500),
    calendar_id VARCHAR(255),
    status VARCHAR(20) DEFAULT 'scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_google_meet_batch_schedule_id ON google_meet(batch_schedule_id);
```

---

## 16. ER Diagram Description

### Entity Relationships Overview

```
Institute (1) ----< (N) Branch
Institute (1) ----< (N) User
Institute (1) ----< (N) Course
Institute (1) ----< (N) Batch
Institute (1) ----< (N) Company
Institute (1) ----< (N) Job Opening
Institute (1) ----< (N) Announcement
Institute (1) ----< (N) Audit Log

Branch (1) ----< (N) User
Branch (1) ----< (N) Batch

Category (1) ----< (N) Course
Category (1) ----< (N) Category (self-referencing)

Course (1) ----< (N) Module
Course (1) ----< (N) Batch
Course (1) ----< (N) Student Progress
Course (1) ----< (N) Recording
Course (1) ----< (N) Assessment
Course (1) ----< (N) Fee Structure
Course (1) ----< (N) Certificate

Module (1) ----< (N) Lesson
Module (1) ----< (N) Batch Schedule

Lesson (1) ----< (N) Lab Guide
Lesson (1) ----< (N) Assessment
Lesson (1) ----< (N) Assignment
Lesson (1) ----< (N) Lesson Progress

User (1) ----< (N) Batch Student (as student)
User (1) ----< (N) Batch (as trainer)
User (1) ----< (N) Batch Schedule (as trainer)
User (1) ----< (N) Attendance
User (1) ----< (N) Assignment Submission
User (1) ----< (N) Student Progress
User (1) ----< (N) Lesson Progress
User (1) ----< (N) Student Profile
User (1) ----< (N) Job Application
User (1) ----< (N) Interview
User (1) ----< (N) Offer
User (1) ----< (N) Student Fee
User (1) ----< (N) Fee Payment
User (1) ----< (N) Certificate
User (1) ----< (N) Notification
User (1) ----< (N) Notification Preference
User (1) ----< (N) Audit Log
User (1) ----< (N) User Role

Batch (1) ----< (N) Batch Student
Batch (1) ----< (N) Batch Schedule
Batch (1) ----< (N) Assignment
Batch (1) ----< (N) Attendance
Batch (1) ----< (N) Recording
Batch (1) ----< (N) Student Progress
Batch (1) ----< (N) Student Fee
Batch (1) ----< (N) Batch Health Score

Batch Schedule (1) ----< (N) Attendance
Batch Schedule (1) ----< (N) Zoom Meeting
Batch Schedule (1) ----< (N) Google Meet
Batch Schedule (1) ----< (N) Recording

Assignment (1) ----< (N) Assignment Submission

Job Opening (1) ----< (N) Job Application
Job Application (1) ----< (N) Interview
Job Application (1) ----< (N) Offer

Company (1) ----< (N) Job Opening
Company (1) ----< (N) Offer
```

### Key Relationships

1. **Institute** is the top-level entity with all other entities belonging to an institute
2. **User** has a many-to-many relationship with **Role** through user_roles
3. **Course** contains **Modules**, which contain **Lessons**
4. **Batch** is an instance of a **Course** with specific students and schedule
5. **Student** progress is tracked at Course, Module, and Lesson levels
6. **Attendance** is linked to Batch Schedule and Student
7. **Placement** entities (Company, Job Opening, Application, Interview, Offer) form a complete placement tracking system
8. **AI Insights** are generated for various entities (Student, Batch, Course, Trainer)
9. **Audit Logs** track all changes across the system

---

## 17. Database Indexes Summary

### Primary Indexes
- All tables have UUID primary keys with default gen_random_uuid()

### Foreign Key Indexes
- All foreign key columns are indexed for join performance

### Specialized Indexes
- GIN indexes on JSONB columns for JSON queries
- GIN indexes on TEXT[] arrays for array searches
- Composite indexes on frequently queried column combinations
- Timestamp indexes for date-range queries

### Performance Considerations
- Indexes on status columns for filtering
- Indexes on date columns for reporting
- Indexes on email/username for authentication
- Indexes on lookup columns (code, slug) for unique constraints

---

## 18. Data Retention Policy

| Table | Retention Period | Reason |
|-------|-----------------|--------|
| Users | Until account deletion | User data |
| Courses | Indefinite | Course content |
| Batches | 7 years post-completion | Compliance |
| Attendance | 7 years | Compliance |
| Recordings | Configurable | Storage optimization |
| Assignments | 3 years post-completion | Academic records |
| Student Progress | 7 years | Academic records |
| Certificates | Indefinite | Verification |
| Fee Payments | 7 years | Tax compliance |
| Audit Logs | 1 year | Security |
| System Logs | 90 days | Debugging |
| Notifications | 90 days | Storage |
| AI Insights | 90 days | Relevance |

---

## 19. Database Migration Strategy

### Migration Tools
- Prisma Migrate for schema changes
- Version-controlled migration files
- Rollback capability

### Migration Process
1. Create migration file
2. Review in staging environment
3. Test with sample data
4. Schedule production migration
5. Monitor for issues
6. Verify data integrity

### Backup Strategy
- Daily full backups
- Hourly incremental backups
- Point-in-time recovery (PITR)
- Cross-region backup replication

---

## 20. Summary

This database schema provides:
- **50+ tables** covering all aspects of the platform
- **Normalized design** for data integrity
- **Optimized indexes** for performance
- **Comprehensive relationships** for data consistency
- **Audit trails** for compliance
- **AI/ML support** through dedicated tables
- **Scalability** through proper索引 and partitioning strategies

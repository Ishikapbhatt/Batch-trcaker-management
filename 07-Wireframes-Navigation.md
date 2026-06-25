# Wireframes & Navigation Structure - Training Institute Management Platform

## Executive Summary

This document provides detailed wireframes and navigation structures for all 4 panels (Super Admin, Admin, Trainer, Student) of the Training Institute Management Platform (TIMP).

---

## 1. Design System

### 1.1 Color Palette

**Primary Colors:**
- Primary Blue: `#3B82F6` (Brand primary)
- Secondary Blue: `#1E40AF` (Brand secondary)
- Accent Green: `#10B981` (Success)
- Accent Orange: `#F59E0B` (Warning)
- Accent Red: `#EF4444` (Error)

**Neutral Colors:**
- Background: `#F9FAFB` (Light gray)
- Surface: `#FFFFFF` (White)
- Border: `#E5E7EB` (Gray)
- Text Primary: `#111827` (Dark)
- Text Secondary: `#6B7280` (Medium gray)
- Text Tertiary: `#9CA3AF` (Light gray)

### 1.2 Typography

**Font Family:** Inter (Primary), Roboto (Secondary)

**Font Sizes:**
- H1: 32px (Headings)
- H2: 24px (Section titles)
- H3: 20px (Subsection titles)
- H4: 16px (Card titles)
- Body: 14px (Body text)
- Small: 12px (Captions, labels)

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### 1.3 Spacing

**Scale:** 4px base unit
- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px
- 2XL: 48px
- 3XL: 64px

### 1.4 Components

**Buttons:**
- Primary: Blue background, white text
- Secondary: White background, blue border
- Danger: Red background, white text
- Ghost: Transparent background, colored text

**Cards:**
- White background
- Subtle shadow
- Rounded corners (8px)
- Padding: 24px

**Inputs:**
- White background
- Gray border
- Rounded corners (6px)
- Padding: 12px

**Tables:**
- White background
- Gray borders
- Zebra striping
- Hover effects

---

## 2. Super Admin Panel

### 2.1 Navigation Structure

**Sidebar Navigation:**
```
├─ Dashboard
├─ Institutes
│  ├─ All Institutes
│  ├─ Add Institute
│  └─ Branches
├─ Users
│  ├─ All Users
│  ├─ Add User
│  └─ Roles & Permissions
├─ Analytics
│  ├─ Overview
│  ├─ Revenue
│  ├─ Growth
│  └─ Reports
├─ Audit Logs
├─ System Settings
│  ├─ General
│  ├─ Security
│  ├─ Integrations
│  └─ Notifications
└─ Help & Support
```

**Top Bar:**
```
┌─────────────────────────────────────────────────────┐
│ [Logo] TIMP Super Admin    [Search] [Notifications] [Profile] │
└─────────────────────────────────────────────────────┘
```

### 2.2 Dashboard Wireframe

```
┌─────────────────────────────────────────────────────────────────┐
│  SUPER ADMIN DASHBOARD                                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ 50       │ │ 50,000   │ │ 1,000    │ │ $5M      │          │
│  │Institutes│ │Students  │ │Trainers  │ │Revenue   │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Revenue Growth Chart (Line Chart)                        │   │
│  │ [Last 12 Months]                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌──────────────────────┐ ┌─────────────────────────────────┐ │
│  │ Top 5 Institutes     │ │ Recent Activity                 │ │
│  │ 1. Tech Institute    │ │ • Institute created: ABC        │ │
│  │ 2. Cloud Academy     │ │ • User added: John Doe          │ │
│  │ 3. DevOps School     │ │ • Payment received: $2,500      │ │
│  │ 4. AI Training       │ │ • Batch created: DOB1           │ │
│  │ 5. Linux Center      │ │ • Certificate issued: STU001   │ │
│  └──────────────────────┘ └─────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Student Growth by Region (Map/Bar Chart)                │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 Institutes Management Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  INSTITUTES                              [+ Add Institute]      │
├─────────────────────────────────────────────────────────────────┤
│  Search: [_______________] Filter: [All ▼] Sort: [Name ▼]      │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Institute Name │ Code │ Students │ Trainers │ Revenue │Status│
│  ├─────────────────────────────────────────────────────────────┤│
│  │ Tech Institute │ TI  │ 1,500    │ 25       │ $500K   │Active│
│  │ Cloud Academy  │ CA  │ 2,000    │ 30       │ $750K   │Active│
│  │ DevOps School  │ DS  │ 800      │ 15       │ $300K   │Active│
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  [Previous] Page 1 of 5 [Next]                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.4 Add Institute Modal

```
┌─────────────────────────────────────────────────────────────────┐
│  Add New Institute                                    [X]       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Institute Information                                          │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Name: [Tech Training Institute_______________]           │  │
│  │ Code: [TTI________]                                      │  │
│  │ Domain: [tti.timp.com_________________]                  │  │
│  │ Contact Email: [admin@tti.com______________]             │  │
│  │ Contact Phone: [+1234567890______________]               │  │
│  │ Address: [123 Tech Street________________]                │  │
│  │ City: [San Francisco________] State: [CA____] Country: [USA]│
│  │ Timezone: [America/Los_Angeles ▼]                        │  │
│  │ Currency: [USD ▼]                                        │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Branding                                                       │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Logo: [Upload Logo________________]                      │  │
│  │ Primary Color: [#3B82F6____] Secondary Color: [#10B981__]│  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Admin Account                                                  │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Admin Email: [admin@tti.com______________]             │  │
│  │ Admin Name: [Admin________] [User________]             │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  [Cancel]                              [Create Institute]      │
└─────────────────────────────────────────────────────────────────┘
```

### 2.5 Audit Logs Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  AUDIT LOGS                                                     │
├─────────────────────────────────────────────────────────────────┤
│  Filters:                                                       │
│  Date Range: [06/01/2026] to [06/30/2026]                      │
│  User: [All Users ▼] Action: [All Actions ▼]                   │
│  Entity: [All Entities ▼]                                      │
│  [Apply Filters] [Reset]                                       │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Timestamp    │ User       │ Action  │ Entity    │ Details  │
│  ├─────────────────────────────────────────────────────────────┤│
│  │ 06/25 12:00 │ admin@tti  │ UPDATE  │ Institute │ Updated  │
│  │              │ .com       │         │ Tech Inst │ status   │
│  │ 06/25 11:30 │ admin@tti  │ CREATE  │ User      │ Created  │
│  │              │ .com       │         │ John Doe  │ student  │
│  │ 06/25 10:15 │ trainer@ti │ DELETE  │ Batch     │ Deleted  │
│  │              │ .com       │         │ DOB1      │ batch    │
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  [Export Logs]                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Admin Panel

### 3.1 Navigation Structure

**Sidebar Navigation:**
```
├─ Dashboard
├─ Students
│  ├─ All Students
│  ├─ Add Student
│  ├─ Bulk Import
│  └─ Student Profiles
├─ Batches
│  ├─ All Batches
│  ├─ Create Batch
│  ├─ Batch Schedule
│  └─ Batch Students
├─ Trainers
│  ├─ All Trainers
│  ├─ Add Trainer
│  ├─ Assign Trainers
│  └─ Trainer Performance
├─ Courses
│  ├─ All Courses
│  ├─ Create Course
│  ├─ Course Modules
│  └─ Course Content
├─ Attendance
│  ├─ Mark Attendance
│  ├─ Attendance Reports
│  └─ Attendance Analytics
├─ Assignments
│  ├─ All Assignments
│  ├─ Create Assignment
│  └─ Assignment Reports
├─ Recordings
│  ├─ All Recordings
│  ├─ Upload Recording
│  └─ Recording Analytics
├─ Placement
│  ├─ Dashboard
│  ├─ Job Openings
│  ├─ Student Applications
│  ├─ Interviews
│  └─ Offers
├─ Fees
│  ├─ Overview
│  ├─ Fee Structure
│  ├─ Payments
│  └─ Reports
├─ Announcements
│  ├─ All Announcements
│  ├─ Create Announcement
│  └─ Scheduled
└─ Settings
   ├─ Institute Settings
   ├─ Payment Gateway
   ├─ Email/SMS Settings
   └─ Integrations
```

### 3.2 Dashboard Wireframe

```
┌─────────────────────────────────────────────────────────────────┐
│  ADMIN DASHBOARD                                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ 1,500    │ │ 50       │ │ 25       │ │ 85%      │          │
│  │Active    │ │Active    │ │Active    │ │Placement │          │
│  │Students  │ │Batches   │ │Trainers  │ │Rate      │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Upcoming Classes Today                                   │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ 6:00 PM - DevOps Batch 1 - Docker Containers         │ │   │
│  │ │ Trainer: Jane Smith | Students: 45 | [Join Class]   │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ 7:30 PM - AWS Batch 2 - EC2 Basics                 │ │   │
│  │ │ Trainer: John Doe | Students: 30 | [Join Class]     │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌──────────────────────┐ ┌─────────────────────────────────┐ │
│  │ Pending Tasks        │ │ Recent Enrollments             │ │
│  │ • 5 attendance to    │ │ • John Doe - DevOps Eng        │ │
│  │   mark               │ │ • Jane Smith - AWS Arch         │ │
│  │ • 15 assignments to  │ │ • Bob Johnson - Linux Admin     │ │
│  │   review             │ │ • Alice Brown - AI/ML           │ │
│  │ • 3 recordings to    │ │ • Charlie Davis - DevOps        │ │
│  │   upload             │ │                                 │ │
│  └──────────────────────┘ └─────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Attendance Overview (Bar Chart)                         │   │
│  │ [This Week] [This Month] [This Quarter]                  │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### 3.3 Students List Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  STUDENTS                                    [+ Add] [Import]   │
├─────────────────────────────────────────────────────────────────┤
│  Search: [_______________] Batch: [All ▼] Status: [All ▼]     │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │Student ID│Name       │Email          │Batch │Attendance│Status│
│  ├─────────────────────────────────────────────────────────────┤│
│  │STU2026001│John Doe   │john@tti.com   │DOB1  │85%       │Active│
│  │STU2026002│Jane Smith │jane@tti.com   │DOB1  │92%       │Active│
│  │STU2026003│Bob Johnson│bob@tti.com    │AWS1  │78%       │Active│
│  │STU2026004│Alice Brown│alice@tti.com  │AI1   │65%       │AtRisk│
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  [Previous] Page 1 of 75 [Next]                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.4 Create Batch Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  CREATE BATCH                                       [Save] [Cancel]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Basic Information                                              │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Batch Name: [DevOps Batch 1_________________]          │  │
│  │ Batch Code: [DOB1________]                              │  │
│  │ Course: [DevOps Engineering ▼]                          │  │
│  │ Branch: [Main Branch ▼]                                 │  │
│  │ Description: [Comprehensive DevOps batch______________] │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Schedule                                                       │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Start Date: [07/01/2026____] End Date: [12/31/2026__]  │  │
│  │ Timing: [Evening ▼] Custom: [6:00 PM - 9:00 PM______]  │  │
│  │ Class Days: [Mon-Fri ▼]                                 │  │
│  │ Mode: [Online ▼]                                        │  │
│  │ Capacity: [50____]                                      │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Trainer Assignment                                             │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Primary Trainer: [Jane Smith ▼]                          │  │
│  │ Secondary Trainer: [John Doe ▼]                           │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Requirements                                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Attendance Requirement: [75%____]                        │  │
│  │ Minimum Passing Score: [60%____]                         │  │
│  │ Recording Access: [Immediate ▼]                          │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### 3.5 Attendance Report Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  ATTENDANCE REPORTS                                              │
├─────────────────────────────────────────────────────────────────┤
│  Report Type: [Monthly ▼]                                       │
│  Batch: [DevOps Batch 1 ▼]                                      │
│  Month: [June 2026 ▼]                                           │
│  [Generate Report]                                             │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ATTENDANCE SUMMARY                                           ││
│  │ Total Students: 50 | Average Attendance: 78%                ││
│  │ Present Days: 22 | Total Days: 28                           ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ STUDENT-WISE ATTENDANCE                                      ││
│  │ Student Name       │ Present │ Absent │ Percentage │ Status ││
│  ├─────────────────────────────────────────────────────────────┤│
│  │ John Doe          │ 22      │ 6      │ 78.6%     │ OK     ││
│  │ Jane Smith        │ 25      │ 3      │ 89.3%     │ OK     ││
│  │ Bob Johnson       │ 18      │ 10     │ 64.3%     LOW    ││
│  │ Alice Brown       │ 20      │ 8      │ 71.4%     │ OK     ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ AI INSIGHTS                                                  ││
│  │ ⚠️ At-Risk Students:                                        ││
│  │ • Bob Johnson - 64.3% attendance (Risk Score: 75)          ││
│  │ • Alice Brown - 71.4% attendance (Risk Score: 60)           ││
│  │                                                             ││
│  │ Recommendations:                                            ││
│  │ • Schedule counseling session with Bob Johnson               ││
│  │ • Send attendance reminder to Alice Brown                    ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  [Export PDF] [Export Excel] [Send Email]                      │
└─────────────────────────────────────────────────────────────────┘
```

### 3.6 Placement Dashboard Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  PLACEMENT DASHBOARD                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ 120      │ │ 85%      │ │ $95K     │ │ 50       │          │
│  │Placed    │ │Placement │ │Average   │ │Companies │          │
│  │Students  │ │Rate      │ │Package   │ │Visited   │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Recent Placements                                        │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ John Doe - DevOps Engineer @ Tech Corp - $100K       │ │   │
│  │ │ Placed: June 20, 2026                                │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ Jane Smith - Cloud Architect @ Cloud Inc - $110K     │ │   │
│  │ │ Placed: June 18, 2026                                │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌──────────────────────┐ ┌─────────────────────────────────┐ │
│  │ Upcoming Interviews   │ │ Open Job Positions             │ │
│  │ • Bob Johnson -       │ │ • DevOps Engineer - Tech Corp  │ │
│  │   Tech Corp - Jun 28  │ │ • Cloud Architect - AWS Inc    │ │
│  │ • Alice Brown -       │ │ • Linux Admin - Red Hat        │ │
│  │   Google - Jun 30     │ │ • AI Engineer - OpenAI        │ │
│  └──────────────────────┘ └─────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Placement Trends (Line Chart)                             │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Trainer Panel

### 4.1 Navigation Structure

**Sidebar Navigation:**
```
├─ Dashboard
├─ My Batches
│  ├─ All Batches
│  ├─ Batch Students
│  └─ Batch Schedule
├─ Classes
│  ├─ Today's Classes
│  ├─ Upcoming Classes
│  ├─ Past Classes
│  └─ Class History
├─ Attendance
│  ├─ Mark Attendance
│  ├─ QR Code Attendance
│  ├─ Attendance History
│  └─ Attendance Reports
├─ Assignments
│  ├─ My Assignments
│  ├─ Create Assignment
│  ├─ Review Submissions
│  └─ Assignment Analytics
├─ Recordings
│  ├─ My Recordings
│  ├─ Upload Recording
│  └─ Recording Analytics
├─ Students
│  ├─ Student List
│  ├─ Student Performance
│  ├─ Weak Students
│  └─ Top Performers
├─ Announcements
│  ├─ All Announcements
│  └─ Create Announcement
└─ Profile
```

### 4.2 Dashboard Wireframe

```
┌─────────────────────────────────────────────────────────────────┐
│  TRAINER DASHBOARD                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ TODAY'S SCHEDULE                                          │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ 6:00 PM - 9:00 PM                                     │ │   │
│  │ │ DevOps Batch 1 - Docker Containers                    │ │   │
│  │ │ Students: 45 | [Start Class] [Join Class]           │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ 3        │ │ 15       │ │ 1        │ │ 85       │          │
│  │Batches   │ │Pending   │ │Recording │ │Batch    │          │
│  │Assigned  │ │Reviews   │ │To Upload │ │Health   │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                 │
│  ┌──────────────────────┐ ┌─────────────────────────────────┐ │
│  │ MY BATCHES           │ │ PENDING TASKS                  │ │
│  │ • DevOps Batch 1     │ │ • Mark attendance for DOB1       │ │
│  │   (45 students)      │ │ • Review 15 assignments         │ │
│  │   Progress: 60%      │ │ • Upload recording for AWS1     │ │
│  │ • AWS Batch 2        │ │ • Create assignment for DOB1     │ │
│  │   (30 students)      │ │                                 │ │
│  │   Progress: 45%      │ │                                 │ │
│  └──────────────────────┘ └─────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ STUDENT PERFORMANCE (AI Insights)                          │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ ⚠️ Weak Students (Risk Score > 70)                    │ │   │
│  │ │ • Alice Brown - Attendance: 65%, Score: 55           │ │   │
│  │ │ • Bob Johnson - Attendance: 70%, Score: 60           │ │   │
│  │ │ [Send Warning] [Schedule Session]                     │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ ⭐ Top Performers (Score > 90)                       │ │   │
│  │ │ • John Doe - Attendance: 95%, Score: 92              │ │   │
│  │ │ • Jane Smith - Attendance: 92%, Score: 91             │ │   │
│  │ │ [Send Appreciation]                                   │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### 4.3 Mark Attendance Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  MARK ATTENDANCE                                    [Save] [Cancel]│
├─────────────────────────────────────────────────────────────────┤
│  Batch: DevOps Batch 1                                          │
│  Class: Docker Containers                                       │
│  Date: June 25, 2026                                            │
│  Time: 6:00 PM - 9:00 PM                                       │
│                                                                 │
│  Attendance Method: [Manual ▼] [Generate QR Code]               │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │Student Name      │Status    │Check-in Time│Remarks          ││
│  ├─────────────────────────────────────────────────────────────┤│
│  │John Doe          │[Present▼]│6:05 PM      │                 ││
│  │Jane Smith        │[Present▼]│6:02 PM      │                 ││
│  │Bob Johnson       │[Absent ▼]│             │Medical leave    ││
│  │Alice Brown       │[Late   ▼]│6:15 PM      │                 ││
│  │Charlie Davis     │[Present▼]│6:00 PM      │                 ││
│  │[Select All] [Deselect All]                                   ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  Summary: Present: 40 | Absent: 3 | Late: 2 | Total: 45        │
│                                                                 │
│  [AI Insights] View attendance patterns and risk scores          │
└─────────────────────────────────────────────────────────────────┘
```

### 4.4 Create Assignment Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  CREATE ASSIGNMENT                                 [Save] [Cancel]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Basic Information                                              │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Batch: [DevOps Batch 1 ▼]                               │  │
│  │ Lesson: [Docker Containers ▼]                           │  │
│  │ Title: [Docker Assignment________________]               │  │
│  │ Description: [Create a Dockerfile for Node.js app_____] │  │
│  │ Instructions: [Follow the lab guide provided__________] │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Schedule                                                       │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Due Date: [07/01/2026____] Due Time: [11:59 PM______]  │  │
│  │ Max Marks: [100____]                                    │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Settings                                                       │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Allow Late Submission: [✓] Penalty: [10%____]          │  │
│  │ Plagiarism Check: [✓]                                   │  │
│  │ AI Evaluation: [✓]                                      │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Resources                                                      │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ [Upload Lab Guide] [Upload Sample Solution]             │  │
│  │ Lab Guide: lab-guide.pdf [Remove]                        │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  [Preview Assignment] [Publish Now] [Schedule for Later]      │
└─────────────────────────────────────────────────────────────────┘
```

### 4.5 Student Performance Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  STUDENT PERFORMANCE - DevOps Batch 1                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ BATCH OVERVIEW                                             │   │
│  │ Average Score: 78 | Average Attendance: 85%               │   │
│  │ Completion Rate: 60% | Engagement Score: 80                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │Student Name      │Attendance│Score   │Assignments│Risk    ││
│  ├─────────────────────────────────────────────────────────────┤│
│  │John Doe          │95%       │92      │15/20     │Low (10)││
│  │Jane Smith        │92%       │91      │14/20     │Low (15)││
│  │Bob Johnson       │70%       │60      │10/20     │High(75)││
│  │Alice Brown       │65%       │55      │8/20      │High(85)││
│  │Charlie Davis     │88%       │82      │13/20     │Med (45)││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ AI INSIGHTS                                              │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ ⚠️ At-Risk Students                                   │ │   │
│  │ │ • Alice Brown - Risk Score: 85                       │ │   │
│  │ │   Factors: Low attendance, missed assignments        │ │   │
│  │ │   Recommendations: Schedule counseling, provide      │ │   │
│  │ │   additional resources                                │ │   │
│  │ │ [Send Warning] [Schedule Session]                     │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ Common Mistakes (AI Analysis)                        │ │   │
│  │ │ • Docker file optimization errors                    │ │   │
│  │ │ • Container security issues                          │ │   │
│  │ │ • Image size not optimized                            │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 5. Student Panel

### 5.1 Navigation Structure

**Sidebar Navigation:**
```
├─ Dashboard
├─ My Courses
│  ├─ All Courses
│  ├─ Course Content
│  └─ Progress
├─ Live Classes
│  ├─ Upcoming Classes
│  ├─ Calendar View
│  └─ Past Classes
├─ Recordings
│  ├─ All Recordings
│  ├─ By Batch
│  ├─ By Topic
│  └─ Search
├─ Assignments
│  ├─ My Assignments
│  ├─ Pending
│  ├─ Submitted
│  └─ Graded
├─ Attendance
│  ├─ My Attendance
│  ├─ Calendar View
│  └─ Analytics
├─ Placement
│  ├─ Dashboard
│  ├─ My Profile
│  ├─ Job Openings
│  ├─ My Applications
│  ├─ Interviews
│  └─ Mock Interviews
├─ Certificates
│  ├─ My Certificates
│  └─ Download
├─ Announcements
│  ├─ All Announcements
│  └─ Important
└─ Profile
   ├─ Personal Info
   ├─ Educational Info
   ├─ Skills
   ├─ Payment History
   └─ Settings
```

### 5.2 Dashboard Wireframe

```
┌─────────────────────────────────────────────────────────────────┐
│  STUDENT DASHBOARD                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ MY COURSES                                                │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ [Thumbnail] DevOps Engineering                        │ │   │
│  │ │ Progress: 60% | Continue Learning →                  │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ [Thumbnail] AWS Solutions Architect                  │ │   │
│  │ │ Progress: 30% | Continue Learning →                  │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ UPCOMING CLASS                                            │   │
│  │ Tomorrow, 6:00 PM                                        │   │
│  │ DevOps Batch 1 - Kubernetes Basics                        │   │
│  │ Trainer: Jane Smith | [Set Reminder] [Add to Calendar]   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ 85%      │ │ 1        │ 15/20     │ │ 6/10     │          │
│  │Attendance│ │Pending   │Assignments│Modules   │          │
│  │          │ │Assignment│Completed  │Completed │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                 │
│  ┌──────────────────────┐ ┌─────────────────────────────────┐ │
│  │ PENDING ASSIGNMENTS   │ │ RECENT ANNOUNCEMENTS           │ │
│  │ • Kubernetes Assignment│ • Institute closed on Friday    │ │
│  │   Due: Jun 28         │ • New job opening at Tech Corp   │ │
│  │ • Docker Lab          │ • Mock interview scheduled        │ │
│  │   Due: Jun 30         │                                 │ │
│  └──────────────────────┘ └─────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ AI RECOMMENDATIONS                                        │   │
│  │ 📚 Review Docker Networking - Based on assessment        │   │
│  │ 💻 Complete Kubernetes Lab - Improve practical skills     │   │
│  │ 📝 Practice CI/CD Pipeline - Prepare for next module     │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 Course Content Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  DevOps Engineering                                    [Back]      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Progress: 60% (6/10 modules completed)                           │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ MODULES                                                      ││
│  ├─────────────────────────────────────────────────────────────┤│
│  │ ✓ Module 1: Introduction to DevOps (100%)                   ││
│  │   • What is DevOps? [Video - 30 min] ✓                      ││
│  │   • DevOps Principles [PDF] ✓                                ││
│  │   • Assessment [Quiz - 20/20] ✓                             ││
│  ├─────────────────────────────────────────────────────────────┤│
│  │ ✓ Module 2: Version Control (100%)                          ││
│  │   • Git Basics [Video - 45 min] ✓                           ││
│  │   • Git Workflow [Video - 30 min] ✓                          ││
│  │   • Lab: Git Commands [Lab - 60 min] ✓                       ││
│  ├─────────────────────────────────────────────────────────────┤│
│  │ ✓ Module 3: CI/CD Pipelines (100%)                          ││
│  │   • CI/CD Concepts [Video - 40 min] ✓                        ││
│  │   • Jenkins Setup [Video - 50 min] ✓                         ││
│  │   • Lab: Build Pipeline [Lab - 90 min] ✓                    ││
│  ├─────────────────────────────────────────────────────────────┤│
│  │ ◉ Module 4: Docker Containers (60%) ← Current               ││
│  │   • Docker Basics [Video - 45 min] ✓                         ││
│  │   • Docker Commands [Video - 30 min] ✓                      ││
│  │   • Lab: Dockerfile [Lab - 60 min] →                        ││
│  │   • Assignment: Docker Assignment →                         ││
│  │   • Assessment [Quiz - Pending] →                           ││
│  ├─────────────────────────────────────────────────────────────┤│
│  │ ○ Module 5: Kubernetes (0%)                                  ││
│  │   • Kubernetes Basics [Video - 50 min]                       ││
│  │   • Pods & Services [Video - 40 min]                         ││
│  │   • Lab: K8s Deployment [Lab - 90 min]                       ││
│  │   • Assignment: K8s Assignment                              ││
│  │   • Assessment [Quiz]                                        ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### 5.4 Video Player Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  Docker Basics - Module 4, Lesson 1                   [Back]     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ [VIDEO PLAYER]                                             │   │
│  │ [▶] [━━━━━━━━━━━━━━━━━━━━━━] 12:30 / 45:00               │   │
│  │ [1x ▼] [HD ▼] [CC] [Notes] [Download] [Fullscreen]       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ CHAPTERS                                                  │   │
│  │ 0:00 - Introduction                                       │   │
│  │ 5:00 - What is Docker?                                    │   │
│  │ 15:00 - Docker Architecture                               │   │
│  │ 25:00 - Installing Docker                                 │   │
│  │ 35:00 - Docker Commands                                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ RESOURCES                                                 │   │
│  │ 📄 Slides [Download]                                      │   │
│  │ 📄 Lab Guide [Download]                                   │   │
│  │ 🔗 Docker Documentation [Open]                            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ NOTES                                                     │   │
│  │ [Take notes here...]                                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  [Mark as Complete] [Next Lesson →]                            │
└─────────────────────────────────────────────────────────────────┘
```

### 5.5 Assignment Submission Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  Docker Assignment                                 [Back]        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Due: July 1, 2026 at 11:59 PM                                  │
│  Max Marks: 100                                                 │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ DESCRIPTION                                               │   │
│  │ Create a Dockerfile for a Node.js application with the    │   │
│  │ following requirements:                                    │   │
│  │ • Use multi-stage build                                   │   │
│  │ • Optimize image size                                     │   │
│  │ • Include health check                                     │   │
│  │ • Use environment variables                                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ RESOURCES                                                 │   │
│  │ 📄 Lab Guide [Download]                                   │   │
│  │ 📄 Sample Solution [Download]                             │   │
│  │ 🔗 Node.js Documentation [Open]                            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ SUBMIT ASSIGNMENT                                         │   │
│  │ Upload Files: [Drag & Drop or Click to Upload]            │   │
│  │ solution.zip [Remove]                                     │   │
│  │                                                             │   │
│  │ Code Content:                                              │   │
│  │ [Paste your code here...]                                  │   │
│  │                                                             │   │
│  │ Comments: [Add any comments for the trainer...]           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  [Submit Assignment]                                           │
└─────────────────────────────────────────────────────────────────┘
```

### 5.6 Attendance Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  MY ATTENDANCE                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ 85%      │ │ 80%      │ │ 82%      │ │ Stable   │          │
│  │Overall   │ │This Week │ │This Month │ │Trend     │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ CALENDAR VIEW                                            │   │
│  │ June 2026                                               │   │
│  │ ┌───┬───┬───┬───┬───┬───┬───┐                          │   │
│  │ │S  │M  │T  │W  │T  │F  │S  │                          │   │
│  │ ├───┼───┼───┼───┼───┼───┼───┤                          │   │
│  │ │   │1  │2  │3  │4  │5  │6  │                          │   │
│  │ │   │✓  │✓  │✗  │✓  │✓  │   │                          │   │
│  │ ├───┼───┼───┼───┼───┼───┼───┤                          │   │
│  │ │7  │8  │9  │10 │11 │12 │13 │                          │   │
│  │ │   │✓  │✓  │✓  │✓  │✓  │   │                          │   │
│  │ └───┴───┴───┴───┴───┴───┴───┘                          │   │
│  │ Legend: ✓ Present ✗ Absent ⚠ Late                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ ATTENDANCE HISTORY                                        │   │
│  │ Date       │Topic              │Status │Remarks          │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │ Jun 25    │Docker Containers   │Present │                 │   │
│  │ Jun 24    │Docker Basics       │Absent │Medical leave    │   │
│  │ Jun 23    │Docker Architecture  │Present │                 │   │
│  │ Jun 22    │Docker Installation  │Late   │Traffic delay    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ AI INSIGHTS                                              │   │
│  │ Attendance Pattern: Consistent                           │   │
│  │ Risk Score: 15 (Low)                                     │   │
│  │ Recommendations:                                         │   │
│  │ • Maintain current attendance                            │   │
│  │ • Focus on completing assignments                         │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### 5.7 Placement Dashboard Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  PLACEMENT DASHBOARD                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ ✓        │ │ 5        │ │ 2        │ │ 0        │          │
│  │Resume    │ │Applications│Interviews │Offers    │          │
│  │Uploaded  │ │Submitted  │Scheduled │Received  │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ MY RESUME                                                │   │
│  │ Resume Score: 85/100                                     │   │
│  │ Last Updated: June 20, 2026                              │   │
│  │ [Update Resume] [View Resume]                             │   │
│  │ AI Feedback:                                              │   │
│  │ ✓ Good technical skills section                           │   │
│  │ ⚠ Add more project details                                │   │
│  │ ⚠ Improve formatting                                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ MY APPLICATIONS                                           │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ DevOps Engineer @ Tech Corp                          │ │   │
│  │ │ Applied: Jun 20 | Status: Interview Scheduled       │ │   │
│  │ │ Next Interview: Jun 28, 2:00 PM (Technical)           │ │   │
│  │ │ [View Details] [Prepare]                              │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ Cloud Architect @ Cloud Inc                           │ │   │
│  │ │ Applied: Jun 18 | Status: Under Review               │ │   │
│  │ │ [View Details] [Withdraw]                             │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ JOB OPENINGS                                             │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ DevOps Engineer @ Google                             │ │   │
│  │ │ Location: Mountain View | Salary: $120K-$150K       │ │   │
│  │ │ Skills: DevOps, GCP, Kubernetes | Deadline: Jul 15   │ │   │
│  │ │ [View Details] [Apply Now] ✓ Eligible                │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ Cloud Engineer @ AWS                                 │ │   │
│  │ │ Location: Seattle | Salary: $100K-$130K             │ │   │
│  │ │ Skills: AWS, EC2, S3 | Deadline: Jul 20              │ │   │
│  │ │ [View Details] [Apply Now] ✓ Eligible                │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ UPCOMING MOCK INTERVIEWS                                 │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ Technical Mock Interview                              │ │   │
│  │ │ Date: Jun 30, 10:00 AM | Interviewer: Jane Smith     │ │   │
│  │ │ [Prepare] [Reschedule]                                │ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. Mobile App Navigation

### 6.1 Student Mobile App Navigation

**Bottom Tab Bar:**
```
┌─────────────────────────────────────────┐
│ [🏠] [📚] [📹] [📝] [👤]              │
│ Home Courses Recordings Assignments Profile│
└─────────────────────────────────────────┘
```

**Home Screen:**
```
┌─────────────────────────────────┐
│ TIMP                     [🔔] [⚙]│
├─────────────────────────────────┤
│                                 │
│ Welcome, John!                  │
│                                 │
│ ┌─────────────────────────────┐│
│ │ DevOps Engineering           ││
│ │ Progress: 60%               ││
│ │ [Continue →]                ││
│ └─────────────────────────────┘│
│                                 │
│ ┌─────────────────────────────┐│
│ │ Next Class: Tomorrow 6PM    ││
│ │ Kubernetes Basics           ││
│ │ [Set Reminder]              ││
│ └─────────────────────────────┘│
│                                 │
│ ┌─────────────────────────────┐│
│ │ Pending: 1 Assignment        ││
│ │ Due: Jun 28                 ││
│ │ [View →]                    ││
│ └─────────────────────────────┘│
│                                 │
│ Attendance: 85% ✓              │
└─────────────────────────────────┘
```

---

## 7. Responsive Design Breakpoints

### 7.1 Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** 1024px - 1440px
- **Large Desktop:** > 1440px

### 7.2 Layout Adaptations

**Mobile (< 640px):**
- Hamburger menu for navigation
- Stacked cards
- Single column layouts
- Touch-optimized buttons

**Tablet (640px - 1024px):**
- Collapsible sidebar
- Two-column grids
- Optimized tables with horizontal scroll

**Desktop (1024px+):**
- Full sidebar
- Multi-column layouts
- Full table views

---

## 8. Accessibility

### 8.1 WCAG 2.1 Compliance

- **Level AA:** Target compliance level
- **Keyboard Navigation:** Full keyboard support
- **Screen Readers:** ARIA labels and roles
- **Color Contrast:** 4.5:1 minimum ratio
- **Focus Indicators:** Visible focus states
- **Alt Text:** Descriptive alt text for images

### 8.2 Accessibility Features

- Skip to main content link
- Focus management in modals
- Error messages with ARIA
- Form labels and descriptions
- Semantic HTML structure
- Responsive text scaling

---

## 9. Dark Mode Support

### 9.1 Dark Mode Color Palette

**Background:** `#111827` (Dark gray)
**Surface:** `#1F2937` (Medium gray)
**Border:** `#374151` (Gray)
**Text Primary:** `#F9FAFB` (Light)
**Text Secondary:** `#D1D5DB` (Medium light)

### 9.2 Dark Mode Toggle

- System preference detection
- Manual toggle in settings
- Persist user preference
- Smooth transition animation

---

## 10. Loading States

### 10.1 Loading Indicators

- **Skeleton Screens:** For content loading
- **Spinners:** For actions
- **Progress Bars:** For uploads/downloads
- **Shimmer Effects:** For image loading

### 10.2 Empty States

- Illustrations
- Descriptive text
- Call-to-action buttons
- Helpful suggestions

---

## 11. Error States

### 11.1 Error Handling

- Clear error messages
- Recovery actions
- Contact support option
- Error logging

### 11.2 Error Pages

- 404: Page not found
- 403: Access denied
- 500: Server error
- 503: Service unavailable

---

## 12. Summary

This wireframes and navigation structure document provides:

- **4 complete panel designs** with detailed navigation
- **Screen-by-screen wireframes** for all major features
- **Design system** with colors, typography, and spacing
- **Mobile app navigation** structure
- **Responsive design** guidelines
- **Accessibility** compliance standards
- **Dark mode** support specifications
- **Loading and error** state designs

These wireframes serve as the foundation for UI/UX implementation and design handoff.

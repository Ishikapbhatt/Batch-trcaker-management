# Product Requirement Document (PRD)
## Training Institute Management Platform

### 1. Executive Summary

**Project Name:** Training Institute Management Platform (TIMP)  
**Version:** 1.0  
**Document Status:** Draft  
**Last Updated:** June 25, 2026  

**Objective:** Build a comprehensive, scalable Training Institute Management Platform inspired by Edmingle but specifically optimized for technical training institutes delivering DevOps, Cloud, AI, Linux, AWS, and Placement-oriented programs. The platform will support multiple courses, trainers, batches, and thousands of students with online/offline classes, live sessions, attendance tracking, session recordings, assignment management, progress tracking, and placement tracking.

---

### 2. Business Problem Statement

**Current Challenges:**
- Training institutes struggle with managing multiple courses, batches, and trainers efficiently
- Lack of integrated attendance tracking (manual, QR code, face recognition)
- No centralized system for session recordings and access control
- Difficulty in tracking student progress and placement status
- Fragmented communication between students, trainers, and administrators
- Limited analytics and insights for decision-making
- No AI-powered features for personalized learning and risk prediction

**Target Market:**
- Technical training institutes
- DevOps and Cloud training centers
- AI and Machine Learning academies
- Linux and AWS certification providers
- Placement-focused training organizations

**Target Users:**
- Students (thousands)
- Trainers (multiple)
- Admin/Operations staff
- Super Admins (organization owners)

---

### 3. Solution Overview

**Platform Name:** TIMP (Training Institute Management Platform)  
**Architecture:** Role-Based Access Control (RBAC) with 4 separate panels

**Key Differentiators from Edmingle:**
1. **Technical Training Focus:** Specialized for DevOps, Cloud, AI, Linux, AWS programs
2. **Advanced Attendance System:** Manual, QR Code, Face Recognition, Zoom/Meet integration
3. **AI-Powered Features:** Risk prediction, batch health scoring, learning recommendations
4. **Placement Tracking:** Comprehensive placement management with interview tracking
5. **Lab Integration:** Built-in lab guides and practice assignments for technical courses
6. **Microservices Architecture:** Scalable and maintainable backend

---

### 4. User Roles and Permissions

#### 4.1 Super Admin Panel
**Responsibilities:**
- Organization and branch management
- User management across all roles
- System settings and configurations
- Overall analytics and reporting
- Audit logs and monitoring

**Key Features:**
- Create and manage multiple institutes
- Branch management
- User lifecycle management
- System-wide settings
- Revenue and growth analytics
- Audit logs and compliance

#### 4.2 Admin/Operations Panel
**Responsibilities:**
- Student management and enrollment
- Batch creation and scheduling
- Trainer assignment and management
- Course and curriculum management
- Attendance and placement tracking
- Fee management

**Key Features:**
- Student CRUD operations
- Batch management
- Trainer management
- Course management
- Recording management
- Attendance reports
- Placement tracking
- Fee management

#### 4.3 Trainer Panel
**Responsibilities:**
- Conduct classes and manage sessions
- Mark attendance
- Create and evaluate assignments
- Track student performance
- Upload notes and recordings

**Key Features:**
- Dashboard with today's classes
- Batch management
- Class scheduling and conducting
- Attendance marking
- Assignment creation and evaluation
- Student analytics
- Communication tools

#### 4.4 Student Panel
**Responsibilities:**
- Access courses and learning materials
- Attend live classes
- View recordings
- Submit assignments
- Track progress and attendance
- Manage placement activities

**Key Features:**
- Personalized dashboard
- Course modules and video lectures
- Live class integration
- Recording access
- Assignment submission
- Attendance tracking
- Placement management
- Profile management

---

### 5. Functional Requirements

#### 5.1 Authentication & Authorization
- **REQ-AUTH-001:** Separate login for each role (Super Admin, Admin, Trainer, Student)
- **REQ-AUTH-002:** JWT-based authentication with refresh tokens
- **REQ-AUTH-003:** Google OAuth integration
- **REQ-AUTH-004:** Multi-Factor Authentication (MFA)
- **REQ-AUTH-005:** Role-Based Access Control (RBAC)
- **REQ-AUTH-006:** Session management with timeout
- **REQ-AUTH-007:** Password reset via email
- **REQ-AUTH-008:** Audit trail for all authentication events

#### 5.2 Student Management
- **REQ-STU-001:** Add/Edit/Delete students
- **REQ-STU-002:** Bulk student import via CSV/Excel
- **REQ-STU-003:** Student lifecycle tracking (enrollment to placement)
- **REQ-STU-004:** Student profile management
- **REQ-STU-005:** Student search and filtering
- **REQ-STU-006:** Student batch assignment
- **REQ-STU-007:** Student performance tracking
- **REQ-STU-008:** Student communication (email, SMS, notifications)

#### 5.3 Batch Management
- **REQ-BAT-001:** Create batches with course, trainer, and schedule
- **REQ-BAT-002:** Assign students to batches
- **REQ-BAT-003:** Batch scheduling (recurring classes)
- **REQ-BAT-004:** Batch capacity management
- **REQ-BAT-005:** Batch status tracking (active, completed, cancelled)
- **REQ-BAT-006:** Batch progress tracking
- **REQ-BAT-007:** Batch-wise analytics
- **REQ-BAT-008:** Batch communication channels

#### 5.4 Trainer Management
- **REQ-TRN-001:** Add/Edit/Delete trainers
- **REQ-TRN-002:** Assign courses to trainers
- **REQ-TRN-003:** Assign batches to trainers
- **REQ-TRN-004:** Trainer availability management
- **REQ-TRN-005:** Trainer performance tracking
- **REQ-TRN-006:** Trainer analytics dashboard
- **REQ-TRN-007:** Trainer compensation tracking

#### 5.5 Course Management
- **REQ-CRS-001:** Create courses with curriculum
- **REQ-CRS-002:** Create modules within courses
- **REQ-CRS-003:** Upload video lectures
- **REQ-CRS-004:** Upload PDF notes and lab guides
- **REQ-CRS-005:** Create practice assignments
- **REQ-CRS-006:** Create assessments and quizzes
- **REQ-CRS-007:** Course categorization
- **REQ-CRS-008:** Course pricing and packages

#### 5.6 Attendance System
- **REQ-ATT-001:** Manual attendance marking by trainers
- **REQ-ATT-002:** QR code-based attendance scanning
- **REQ-ATT-003:** Face recognition attendance (future)
- **REQ-ATT-004:** Zoom integration for auto-attendance
- **REQ-ATT-005:** Google Meet integration for auto-attendance
- **REQ-ATT-006:** Attendance history and reports
- **REQ-ATT-007:** Attendance analytics (daily, weekly, monthly)
- **REQ-ATT-008:** Attendance percentage calculation
- **REQ-ATT-009:** Attendance alerts and notifications
- **REQ-ATT-010:** AI-powered attendance insights

#### 5.7 Session Recording Management
- **REQ-REC-001:** Automatic recording sync from Zoom/Meet
- **REQ-REC-002:** Manual recording upload
- **REQ-REC-003:** AWS S3 storage integration
- **REQ-REC-004:** Topic tagging for recordings
- **REQ-REC-005:** Search recordings by topic/batch/date
- **REQ-REC-006:** Recording analytics (views, watch time)
- **REQ-REC-007:** Download restrictions based on access
- **REQ-REC-008:** Recording categorization (batch-wise, topic-wise)
- **REQ-REC-009:** CloudFront CDN for video delivery
- **REQ-REC-010:** DRM encryption for content protection

#### 5.8 Assignment Management
- **REQ-ASN-001:** Create assignments with deadlines
- **REQ-ASN-002:** Upload assignment resources
- **REQ-ASN-003:** Student assignment submission
- **REQ-ASN-004:** Assignment evaluation and grading
- **REQ-ASN-005:** Feedback system
- **REQ-ASN-006:** Assignment analytics
- **REQ-ASN-007:** Plagiarism detection (optional)
- **REQ-ASN-008:** AI-powered assignment evaluation

#### 5.9 Live Classes
- **REQ-LIV-001:** Schedule live classes
- **REQ-LIV-002:** Zoom integration
- **REQ-LIV-003:** Google Meet integration
- **REQ-LIV-004:** Calendar view for students
- **REQ-LIV-005:** Meeting link generation
- **REQ-LIV-006:** Session notes and resources
- **REQ-LIV-007:** Class reminders and notifications
- **REQ-LIV-008:** Recording automation

#### 5.10 Placement Tracking
- **REQ-PLC-001:** Resume upload and management
- **REQ-PLC-002:** Mock interview scheduling and reports
- **REQ-PLC-003:** Job openings posting
- **REQ-PLC-004:** Placement status tracking
- **REQ-PLC-005:** Company application tracking
- **REQ-PLC-006:** Interview scheduling and feedback
- **REQ-PLC-007:** Placement analytics
- **REQ-PLC-008:** Offer letter management

#### 5.11 Fee Management
- **REQ-FEE-001:** Course fee structure
- **REQ-FEE-002:** Installment management
- **REQ-FEE-003:** Payment gateway integration
- **REQ-FEE-004:** Invoice generation
- **REQ-FEE-005:** Payment history tracking
- **REQ-FEE-006:** Pending fee alerts
- **REQ-FEE-007:** Refund management
- **REQ-FEE-008:** GST compliance

#### 5.12 AI Features
- **REQ-AI-001:** AI attendance insights and patterns
- **REQ-AI-002:** AI student risk prediction (dropout risk)
- **REQ-AI-003:** AI batch health score
- **REQ-AI-004:** AI learning recommendations
- **REQ-AI-005:** AI assignment evaluation assistance
- **REQ-AI-006:** AI session summaries
- **REQ-AI-007:** AI chatbot for student queries
- **REQ-AI-008:** AI-powered content suggestions

#### 5.13 Analytics & Reporting
- **REQ-ANL-001:** Real-time dashboards for all roles
- **REQ-ANL-002:** Student performance analytics
- **REQ-ANL-003:** Course completion analytics
- **REQ-ANL-004:** Trainer performance analytics
- **REQ-ANL-005:** Revenue and financial analytics
- **REQ-ANL-006:** Placement analytics
- **REQ-ANL-007:** Attendance analytics
- **REQ-ANL-008:** Custom report generation
- **REQ-ANL-009:** Export reports (PDF, Excel, CSV)
- **REQ-ANL-010:** Scheduled report delivery

#### 5.14 Communication
- **REQ-COM-001:** In-app announcements
- **REQ-COM-002:** Email notifications
- **REQ-COM-003:** SMS notifications
- **REQ-COM-004:** Push notifications (mobile)
- **REQ-COM-005:** Batch discussion forums
- **REQ-COM-006:** Direct messaging
- **REQ-COM-007:** Notification preferences

#### 5.15 Content Protection
- **REQ-SEC-001:** DRM encryption for videos
- **REQ-SEC-002:** Watermarking on content
- **REQ-SEC-003:** Access control by role
- **REQ-SEC-004:** Download restrictions
- **REQ-SEC-005:** IP-based access control
- **REQ-SEC-006:** Screen recording prevention

---

### 6. Non-Functional Requirements

#### 6.1 Performance
- **NFR-PER-001:** Page load time < 2 seconds
- **NFR-PER-002:** API response time < 500ms
- **NFR-PER-003:** Support 10,000+ concurrent users
- **NFR-PER-004:** Video streaming with adaptive bitrate
- **NFR-PER-005:** Database query optimization

#### 6.2 Scalability
- **NFR-SCL-001:** Horizontal scaling capability
- **NFR-SCL-002:** Auto-scaling for peak loads
- **NFR-SCL-003:** Support multiple institutes
- **NFR-SCL-004:** Microservices architecture
- **NFR-SCL-005:** CDN for static assets

#### 6.3 Security
- **NFR-SEC-001:** HTTPS/TLS encryption
- **NFR-SEC-002:** Data encryption at rest
- **NFR-SEC-003:** SQL injection prevention
- **NFR-SEC-004:** XSS protection
- **NFR-SEC-005:** CSRF protection
- **NFR-SEC-006:** Rate limiting
- **NFR-SEC-007:** Input validation
- **NFR-SEC-008:** Regular security audits
- **NFR-SEC-009:** GDPR compliance
- **NFR-SEC-010:** SOC 2 compliance (optional)

#### 6.4 Availability
- **NFR-AVL-001:** 99.9% uptime SLA
- **NFR-AVL-002:** Disaster recovery plan
- **NFR-AVL-003:** Database backups (daily)
- **NFR-AVL-004:** Multi-region deployment
- **NFR-AVL-005:** Load balancing

#### 6.5 Usability
- **NFR-USB-001:** Intuitive UI/UX design
- **NFR-USB-002:** Responsive design (mobile, tablet, desktop)
- **NFR-USB-003:** Accessibility compliance (WCAG 2.1)
- **NFR-USB-004:** Multi-language support (future)
- **NFR-USB-005:** Onboarding tutorials

#### 6.6 Maintainability
- **NFR-MAI-001:** Clean code architecture
- **NFR-MAI-002:** Comprehensive documentation
- **NFR-MAI-003:** Unit test coverage > 80%
- **NFR-MAI-004:** Integration test coverage > 70%
- **NFR-MAI-005:** CI/CD pipeline
- **NFR-MAI-006:** Code review process

---

### 7. Technical Requirements

#### 7.1 Frontend Technology Stack
- **Framework:** React.js 18+
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Bootstrap 5
- **State Management:** Redux Toolkit / Zustand
- **Forms:** React Hook Form + Yup
- **Charts:** Recharts / Chart.js
- **Video Player:** Video.js / Plyr
- **Rich Text Editor:** TipTap / Quill
- **Real-time:** Socket.io Client
- **Routing:** React Router 6
- **Build Tool:** Vite

#### 7.2 Backend Technology Stack
- **Runtime:** Node.js 20+
- **Framework:** Express.js
- **Language:** TypeScript
- **Architecture:** Microservices
- **API:** RESTful + GraphQL (optional)
- **Authentication:** JWT + Passport.js
- **Real-time:** Socket.io
- **File Upload:** Multer + External Storage (MinIO/Backblaze B2)
- **Video Processing:** FFmpeg (optional)
- **Queue:** Bull / Redis
- **Caching:** Redis

#### 7.3 Database
- **Primary Database:** PostgreSQL 15+
- **ORM:** Prisma / TypeORM
- **Caching Layer:** Redis
- **Search Engine:** Elasticsearch (optional)

#### 7.4 Cloud Infrastructure (AWS)
- **Compute:** ECS / Lambda
- **Database:** External PostgreSQL (DigitalOcean/Railway/Neon)
- **Storage:** External Storage (MinIO/Backblaze B2/Wasabi)
- **CDN:** CloudFront
- **Load Balancer:** NLB
- **Container Registry:** ECR
- **Monitoring:** CloudWatch
- **Logging:** CloudWatch Logs
- **Security:** VPC, Security Groups, WAF
- **CI/CD:** GitHub Actions

#### 7.5 Third-Party Integrations
- **Video Conferencing:** Zoom API, Google Meet API
- **Payment:** Stripe / Razorpay / PayPal
- **Email:** SendGrid / AWS SES
- **SMS:** Twilio / AWS SNS
- **AI/ML:** OpenAI API / AWS Bedrock
- **Analytics:** Google Analytics / Mixpanel
- **CDN:** CloudFront

---

### 8. Data Requirements

#### 8.1 Data Storage
- **User Data:** Personal information, authentication data
- **Course Data:** Courses, modules, content
- **Batch Data:** Batch schedules, assignments
- **Attendance Data:** Attendance records, analytics
- **Recording Data:** Video metadata, access logs
- **Assignment Data:** Submissions, grades, feedback
- **Placement Data:** Resumes, interviews, offers
- **Financial Data:** Payments, invoices, receipts
- **Audit Data:** User activities, system logs

#### 8.2 Data Retention
- **User Data:** Retain until account deletion
- **Course Content:** Retain indefinitely
- **Attendance Data:** Retain for 7 years
- **Recordings:** Retain based on policy (configurable)
- **Assignments:** Retain for 3 years post-completion
- **Financial Data:** Retain for 7 years (compliance)
- **Audit Logs:** Retain for 1 year

#### 8.3 Data Privacy
- **Compliance:** GDPR, CCPA, local data protection laws
- **Consent Management:** Explicit consent for data processing
- **Data Portability:** Export user data on request
- **Right to Erasure:** Delete user data on request
- **Data Minimization:** Collect only necessary data

---

### 9. Integration Requirements

#### 9.1 Zoom Integration
- **INT-ZOOM-001:** Create meetings via API
- **INT-ZOOM-002:** Sync attendance from Zoom
- **INT-ZOOM-003:** Fetch recordings automatically
- **INT-ZOOM-004:** Webhook for meeting events

#### 9.2 Google Meet Integration
- **INT-MEET-001:** Create meetings via Google Calendar API
- **INT-MEET-002:** Sync attendance from Meet
- **INT-MEET-003:** Fetch recordings (if available)

#### 9.3 Payment Gateway Integration
- **INT-PAY-001:** Process payments via Stripe/Razorpay
- **INT-PAY-002:** Handle webhooks for payment status
- **INT-PAY-003:** Generate invoices
- **INT-PAY-004:** Handle refunds

#### 9.4 Email Integration
- **INT-EMAIL-001:** Send transactional emails
- **INT-EMAIL-002:** Email templates
- **INT-EMAIL-003:** Email analytics (open, click rates)

#### 9.5 SMS Integration
- **INT-SMS-001:** Send SMS notifications
- **INT-SMS-002:** SMS templates
- **INT-SMS-003:** Delivery tracking

---

### 10. Success Metrics

#### 10.1 User Adoption
- **Target:** 80% student activation within 7 days
- **Target:** 90% trainer adoption within 1 month
- **Target:** 95% admin usage for daily operations

#### 10.2 Engagement
- **Target:** 70% average attendance rate
- **Target:** 80% assignment submission rate
- **Target:** 60% video completion rate

#### 10.3 Performance
- **Target:** < 2 second page load time
- **Target:** 99.9% uptime
- **Target:** < 0.1% error rate

#### 10.4 Business Impact
- **Target:** 30% reduction in administrative time
- **Target:** 25% improvement in placement rate
- **Target:** 20% increase in student satisfaction

---

### 11. Constraints & Assumptions

#### 11.1 Constraints
- **Budget:** To be determined
- **Timeline:** To be determined
- **Resources:** Limited initial team size
- **Compliance:** Must comply with data protection laws
- **Infrastructure:** AWS cloud deployment

#### 11.2 Assumptions
- Users have reliable internet access
- Students have compatible devices for video streaming
- Trainers are comfortable with technology
- Payment gateways support required regions
- Third-party APIs remain available and stable

---

### 12. Risks & Mitigation

#### 12.1 Technical Risks
- **Risk:** Third-party API downtime
  - **Mitigation:** Implement fallback mechanisms, caching
  
- **Risk:** Scalability issues under high load
  - **Mitigation:** Load testing, auto-scaling, CDN

- **Risk:** Data security breaches
  - **Mitigation:** Encryption, security audits, access controls

#### 12.2 Business Risks
- **Risk:** User resistance to new platform
  - **Mitigation:** Training, onboarding, support

- **Risk:** Budget overruns
  - **Mitigation:** Phased development, MVP approach

- **Risk:** Timeline delays
  - **Mitigation:** Agile methodology, regular reviews

---

### 13. Dependencies

#### 13.1 External Dependencies
- AWS infrastructure setup
- Third-party API accounts (Zoom, Google, Payment)
- Domain and SSL certificates
- Payment gateway approval

#### 13.2 Internal Dependencies
- Stakeholder approval
- Requirements finalization
- Team hiring and onboarding
- Budget allocation

---

### 14. Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Product Owner | | | |
| Technical Lead | | | |
| Business Stakeholder | | | |

---

### 15. Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | June 25, 2026 | Cascade | Initial draft |

# Complete User Flows - Training Institute Management Platform

## Executive Summary

This document provides comprehensive user flows for all 4 panels (Super Admin, Admin, Trainer, Student) of the Training Institute Management Platform (TIMP).

---

## 1. Super Admin Panel User Flows

### 1.1 Authentication Flow

```
START
  │
  ├─→ User visits Super Admin Login URL
  │
  ├─→ Enter Email/Username
  │
  ├─→ Enter Password
  │
  ├─→ [Optional] Enter MFA Code
  │
  ├─→ Click Login
  │
  ├─→ Validate Credentials
  │   ├─→ Invalid? → Show Error → Retry
  │   └─→ Valid? → Continue
  │
  ├─→ Check Role (Super Admin)
  │   ├─→ Not Super Admin? → Redirect to appropriate panel
  │   └─→ Super Admin? → Continue
  │
  ├─→ Generate JWT Token
  │
  ├─→ Redirect to Super Admin Dashboard
  │
  └─→ END
```

### 1.2 Institute Creation Flow

```
START
  │
  ├─→ Navigate to Institutes → Create Institute
  │
  ├─→ Enter Institute Details
  │   ├─→ Institute Name
  │   ├─→ Institute Code (Unique)
  │   ├─→ Domain/Subdomain
  │   ├─→ Contact Email
  │   ├─→ Phone Number
  │   ├─→ Address
  │   ├─→ Logo Upload
  │   ├─→ Brand Colors
  │   └─→ Timezone
  │
  ├─→ Configure Institute Settings
  │   ├─→ Default Currency
  │   ├─→ Payment Gateway
  │   ├─→ Email Provider
  │   ├─→ SMS Provider
  │   └─→ Video Conferencing (Zoom/Meet)
  │
  ├─→ Create Admin Account for Institute
  │   ├─→ Admin Name
  │   ├─→ Admin Email
  │   ├─→ Admin Phone
  │   └─→ Temporary Password
  │
  ├─→ Validate Data
  │   ├─→ Invalid? → Show Errors → Retry
  │   └─→ Valid? → Continue
  │
  ├─→ Create Institute in Database
  │
  ├─→ Setup Institute Infrastructure
  │   ├─→ Create Database Schema
  │   ├─→ Configure S3 Bucket
  │   ├─→ Setup CDN
  │   └─→ Configure Email/SMS
  │
  ├─→ Send Welcome Email to Admin
  │
  ├─→ Show Success Message
  │
  └─→ END
```

### 1.3 Branch Management Flow

```
START
  │
  ├─→ Navigate to Institutes → Select Institute → Branches
  │
  ├─→ Click Add Branch
  │
  ├─→ Enter Branch Details
  │   ├─→ Branch Name
  │   ├─→ Branch Code
  │   ├─→ Address
  │   ├─→ Contact Person
  │   ├─→ Phone Number
  │   ├─→ Email
  │   └─→ Capacity
  │
  ├─→ Assign Branch Manager
  │   ├─→ Select from Existing Users
  │   └─→ OR Create New User
  │
  ├─→ Validate Data
  │   ├─→ Invalid? → Show Errors → Retry
  │   └─→ Valid? → Continue
  │
  ├─→ Create Branch in Database
  │
  ├─→ Show Success Message
  │
  └─→ END
```

### 1.4 User Management Flow

```
START
  │
  ├─→ Navigate to Users
  │
  ├─→ Select User Type
  │   ├─→ Admin
  │   ├─→ Trainer
  │   ├─→ Student
  │   └─→ Staff
  │
  ├─→ Click Add User
  │
  ├─→ Enter User Details
  │   ├─→ Personal Information
  │   │   ├─→ Full Name
  │   │   ├─→ Email
  │   │   ├─→ Phone
  │   │   ├─→ Date of Birth
  │   │   └─→ Address
  │   ├─→ Role Selection
  │   ├─→ Institute Assignment
  │   ├─→ Branch Assignment
  │   └─→ Permissions
  │
  ├─→ Validate Data
  │   ├─→ Invalid? → Show Errors → Retry
  │   └─→ Valid? → Continue
  │
  ├─→ Create User in Database
  │
  ├─→ Send Account Creation Email
  │
  ├─→ Show Success Message
  │
  └─→ END
```

### 1.5 System Settings Flow

```
START
  │
  ├─→ Navigate to Settings
  │
  ├─→ Select Setting Category
  │   ├─→ General Settings
  │   ├─→ Security Settings
  │   ├─→ Email Settings
  │   ├─→ SMS Settings
  │   ├─→ Payment Settings
  │   ├─→ Storage Settings
  │   └─→ Integration Settings
  │
  ├─→ Modify Settings
  │
  ├─→ Validate Changes
  │   ├─→ Invalid? → Show Errors → Retry
  │   └─→ Valid? → Continue
  │
  ├─→ Save Settings
  │
  ├─→ Log Audit Trail
  │
  ├─→ Show Success Message
  │
  └─→ END
```

### 1.6 Analytics Dashboard Flow

```
START
  │
  ├─→ Navigate to Dashboard
  │
  ├─→ View Overview Metrics
  │   ├─→ Total Institutes
  │   ├─→ Total Students
  │   ├─→ Total Trainers
  │   ├─→ Total Revenue
  │   └─→ Active Batches
  │
  ├─→ Select Time Period
  │   ├─→ Today
  │   ├─→ This Week
  │   ├─→ This Month
  │   ├─→ This Quarter
  │   └─→ Custom Range
  │
  ├─→ View Detailed Analytics
  │   ├─→ Revenue Analytics
  │   ├─→ Student Growth
  │   ├─→ Course Performance
  │   ├─→ Trainer Performance
  │   └─→ Placement Metrics
  │
  ├─→ [Optional] Export Report
  │   ├─→ Select Format (PDF/Excel/CSV)
  │   ├─→ Generate Report
  │   └─→ Download Report
  │
  ├─→ [Optional] Schedule Report
  │   ├─→ Set Schedule (Daily/Weekly/Monthly)
  │   ├─→ Add Recipients
  │   └─→ Save Schedule
  │
  └─→ END
```

### 1.7 Audit Logs Flow

```
START
  │
  ├─→ Navigate to Audit Logs
  │
  ├─→ Apply Filters
  │   ├─→ Date Range
  │   ├─→ User
  │   ├─→ Action Type
  │   ├─→ Institute
  │   └─→ Module
  │
  ├─→ View Audit Entries
  │   ├─→ Timestamp
  │   ├─→ User
  │   ├─→ Action
  │   ├─→ Module
  │   ├─→ IP Address
  │   └─→ Details
  │
  ├─→ [Optional] Export Logs
  │
  ├─→ [Optional] View Details
  │
  └─→ END
```

---

## 2. Admin Panel User Flows

### 2.1 Authentication Flow

```
START
  │
  ├─→ User visits Admin Login URL
  │
  ├─→ Enter Email/Username
  │
  ├─→ Enter Password
  │
  ├─→ [Optional] Enter MFA Code
  │
  ├─→ Click Login
  │
  ├─→ Validate Credentials
  │   ├─→ Invalid? → Show Error → Retry
  │   └─→ Valid? → Continue
  │
  ├─→ Check Role (Admin)
  │   ├─→ Not Admin? → Redirect to appropriate panel
  │   └─→ Admin? → Continue
  │
  ├─→ Generate JWT Token
  │
  ├─→ Redirect to Admin Dashboard
  │
  └─→ END
```

### 2.2 Student Enrollment Flow

```
START
  │
  ├─→ Navigate to Students → Add Student
  │
  ├─→ Choose Enrollment Method
  │   ├─→ Manual Entry
  │   └─→ Bulk Import
  │
  ├─→ [Manual Entry] Enter Student Details
  │   ├─→ Personal Information
  │   │   ├─→ Full Name
  │   │   ├─→ Email
  │   │   ├─→ Phone
  │   │   ├─→ Date of Birth
  │   │   ├─→ Address
  │   │   └─→ Emergency Contact
  │   ├─→ Educational Background
  │   │   ├─→ Highest Qualification
  │   │   ├─→ University/College
  │   │   ├─→ Year of Passing
  │   │   └─→ Percentage/CGPA
  │   ├─→ Course Selection
  │   │   ├─→ Select Course
  │   │   ├─→ Select Batch
  │   │   └─→ Select Branch
  │   └─→ Payment Details
  │       ├─→ Fee Structure
  │       ├─→ Payment Mode
  │       └─→ Installment Plan
  │
  ├─→ [Bulk Import] Upload CSV/Excel
  │   ├─→ Download Template
  │   ├─→ Upload File
  │   ├─→ Validate Data
  │   ├─→ Map Columns
  │   └─→ Preview Import
  │
  ├─→ Validate Data
  │   ├─→ Invalid? → Show Errors → Retry
  │   └─→ Valid? → Continue
  │
  ├─→ Create Student Record
  │
  ├─→ Assign to Batch
  │
  ├─→ Generate Student ID
  │
  ├─→ Process Payment (if applicable)
  │
  ├─→ Send Welcome Email with Login Credentials
  │
  ├─→ Send SMS Notification
  │
  ├─→ Show Success Message
  │
  └─→ END
```

### 2.3 Batch Creation Flow

```
START
  │
  ├─→ Navigate to Batches → Create Batch
  │
  ├─→ Enter Batch Details
  │   ├─→ Batch Name
  │   ├─→ Batch Code
  │   ├─→ Select Course
  │   ├─→ Select Branch
  │   ├─→ Start Date
  │   ├─→ End Date
  │   ├─→ Capacity
  │   ├─→ Timing (Morning/Evening/Weekend)
  │   └─→ Mode (Online/Offline/Hybrid)
  │
  ├─→ Assign Trainer
  │   ├─→ Primary Trainer
  │   ├─→ [Optional] Secondary Trainer
  │   └─→ [Optional] Guest Lecturers
  │
  ├─→ Configure Schedule
  │   ├─→ Class Days (Mon-Fri, Sat-Sun, etc.)
  │   ├─→ Class Time
  │   ├─→ Recurring Pattern
  │   └─→ Holiday Calendar
  │
  ├─→ Set Curriculum
  │   ├─→ Select Course Modules
  │   ├─→ Set Module Order
  │   └─→ Set Duration per Module
  │
  ├─→ Configure Settings
  │   ├─→ Attendance Requirement (%)
  │   ├─→ Minimum Passing Score
  │   ├─→ Recording Access Policy
  │   └─→ Certificate Criteria
  │
  ├─→ Validate Data
  │   ├─→ Invalid? → Show Errors → Retry
  │   └─→ Valid? → Continue
  │
  ├─→ Create Batch in Database
  │
  ├─→ Generate Calendar Events
  │
  ├─→ Notify Assigned Trainer
  │
  ├─→ Show Success Message
  │
  └─→ END
```

### 2.4 Trainer Assignment Flow

```
START
  │
  ├─→ Navigate to Trainers → Assign Trainer
  │
  ├─→ Select Trainer
  │
  ├─→ View Trainer Profile
  │   ├─→ Expertise Areas
  │   ├─→ Current Assignments
  │   ├─→ Availability
  │   └─→ Performance Rating
  │
  ├─→ Assign to Course
  │   ├─→ Select Course(s)
  │   ├─→ Set Role (Primary/Secondary)
  │   └─→ Set Compensation
  │
  ├─→ Assign to Batch
  │   ├─→ Select Batch(es)
  │   ├─→ Check Schedule Conflicts
  │   └─→ Confirm Assignment
  │
  ├─→ Validate Assignment
  │   ├─→ Conflict? → Show Warning → Resolve
  │   └─→ No Conflict? → Continue
  │
  ├─→ Save Assignment
  │

  ├─→ Notify Trainer
  │
  ├─→ Show Success Message
  │
  └─→ END
```

### 2.5 Course Creation Flow

```
START
  │
  ├─→ Navigate to Courses → Create Course
  │
  ├─→ Enter Course Details
  │   ├─→ Course Name
  │   ├─→ Course Code
  │   ├─→ Category (DevOps/Cloud/AI/Linux/AWS)
  │   ├─→ Description
  │   ├─→ Duration (Hours)
  │   ├─→ Prerequisites
  │   ├─→ Learning Objectives
  │   └─→ Target Audience
  │
  ├─→ Set Pricing
  │   ├─→ Course Fee
  │   ├─→ Discount Options
  │   └─→ Installment Plans
  │
  ├─→ Create Modules
  │   ├─→ Module Name
  │   ├─→ Module Description
  │   ├─→ Module Duration
  │   └─→ Module Order
  │
  ├─→ Add Content to Modules
  │   ├─→ Video Lectures
  │   ├─→ PDF Notes
  │   ├─→ Lab Guides
  │   ├─→ Practice Assignments
  │   └─→ Assessments
  │
  ├─→ Configure Settings
  │   ├─→ Certificate Template
  │   ├─→ Recording Access Policy
  │   ├─→ Content Protection
  │   └─→ Completion Criteria
  │
  ├─→ Validate Course
  │   ├─→ Invalid? → Show Errors → Retry
  │   └─→ Valid? → Continue
  │
  ├─→ Save Course
  │
  ├─→ [Optional] Publish Course
  │
  ├─→ Show Success Message
  │
  └─→ END
```

### 2.6 Attendance Report Flow

```
START
  │
  ├─→ Navigate to Attendance → Reports
  │
  ├─→ Select Report Type
  │   ├─→ Daily Report
  │   ├─→ Weekly Report
  │   ├─→ Monthly Report
  │   └─→ Custom Range
  │
  ├─→ Apply Filters
  │   ├─→ Select Batch
  │   ├─→ Select Course
  │   ├─→ Select Date Range
  │   └─→ Select Attendance Status
  │
  ├─→ Generate Report
  │
  ├─→ View Report
  │   ├─→ Attendance Summary
  │   ├─→ Student-wise Attendance
  │   ├─→ Class-wise Attendance
  │   └─→ Attendance Percentage
  │
  ├─→ View AI Insights
  │   ├─→ Attendance Patterns
  │   ├─→ At-Risk Students
  │   └─→ Recommendations
  │
  ├─→ [Optional] Export Report
  │   ├─→ Select Format
  │   └─→ Download
  │
  ├─→ [Optional] Send Report
  │   ├─→ Add Recipients
  │   └─→ Send Email
  │
  └─→ END
```

### 2.7 Placement Tracking Flow

```
START
  │
  ├─→ Navigate to Placement → Dashboard
  │
  ├─→ View Placement Metrics
  │   ├─→ Total Placed Students
  │   ├─→ Placement Rate
  │   ├─→ Average Package
  │   ├─→ Companies Visited
  │   └─→ Open Positions
  │
  ├─→ [Option A] Add Job Opening
  │   ├─→ Enter Company Details
  │   ├─→ Enter Job Details
  │   ├─→ Set Requirements
  │   ├─→ Set Application Deadline
  │   ├─→ Notify Eligible Students
  │   └─→ Publish Opening
  │
  ├─→ [Option B] Track Student Placement
  │   ├─→ Select Student
  │   ├─→ View Profile
  │   ├─→ Update Placement Status
  │   │   ├─→ Resume Uploaded
  │   │   ├─→ Applied to Companies
  │   │   ├─→ Interview Scheduled
  │   │   ├─→ Offer Received
  │   │   └─→ Placed
  │   ├─→ Add Interview Feedback
  │   └─→ Upload Offer Letter
  │
  ├─→ [Option C] Schedule Mock Interview
  │   ├─→ Select Student(s)
  │   ├─→ Select Interviewer
  │   ├─→ Set Date and Time
  │   ├─→ Set Interview Type
  │   ├─→ Send Notification
  │   └─→ Schedule Interview
  │
  └─→ END
```

### 2.8 Fee Management Flow

```
START
  │
  ├─→ Navigate to Fees → Overview
  │
  ├─→ View Fee Status
  │   ├─→ Total Fees Collected
  │   ├─→ Pending Fees
  │   ├─→ Overdue Fees
  │   └─→ Installment Status
  │
  ├─→ [Option A] Record Payment
  │   ├─→ Select Student
  │   ├─→ View Fee Details
  │   ├─→ Enter Payment Amount
  │   ├─→ Select Payment Mode
  │   ├─→ Enter Transaction Details
  │   ├─→ Generate Invoice
  │   └─→ Send Receipt
  │
  ├─→ [Option B] Send Payment Reminder
  │   ├─→ Select Students with Pending Fees
  │   ├─→ Compose Reminder
  │   ├─→ Send Email
  │   └─→ Send SMS
  │
  ├─→ [Option C] Generate Fee Report
  │   ├─→ Select Date Range
  │   ├─→ Select Batch/Course
  │   ├─→ Generate Report
  │   └─→ Export Report
  │
  └─→ END
```

---

## 3. Trainer Panel User Flows

### 3.1 Authentication Flow

```
START
  │
  ├─→ User visits Trainer Login URL
  │
  ├─→ Enter Email/Username
  │
  ├─→ Enter Password
  │
  ├─→ [Optional] Enter MFA Code
  │
  ├─→ Click Login
  │
  ├─→ Validate Credentials
  │   ├─→ Invalid? → Show Error → Retry
  │   └─→ Valid? → Continue
  │
  ├─→ Check Role (Trainer)
  │   ├─→ Not Trainer? → Redirect to appropriate panel
  │   └─→ Trainer? → Continue
  │
  ├─→ Generate JWT Token
  │
  ├─→ Redirect to Trainer Dashboard
  │
  └─→ END
```

### 3.2 Dashboard View Flow

```
START
  │
  ├─→ Navigate to Dashboard
  │
  ├─→ View Today's Schedule
  │   ├─→ Upcoming Classes
  │   ├─→ Class Time
  │   ├─→ Batch Name
  │   ├─→ Topic
  │   └─→ Join Class Button
  │
  ├─→ View Assigned Batches
  │   ├─→ Batch Name
  │   ├─→ Course Name
  │   ├─→ Student Count
  │   ├─→ Progress
  │   └─→ Next Class
  │
  ├─→ View Pending Tasks
  │   ├─→ Attendance to Mark
  │   ├─→ Assignments to Review
  │   ├─→ Recordings to Upload
  │   └─→ Announcements to Create
  │
  ├─→ View Student Performance
  │   ├─→ Top Performers (AI-identified)
  │   ├─→ Weak Students (AI-identified)
  │   ├─→ Attendance Overview
  │   └─→ Assignment Completion Rate
  │

  ├─→ View Batch Health Score
  │   ├─→ Overall Score
  │   ├─→ Attendance Score
  │   ├─→ Engagement Score
  │   └─→ Performance Score
  │
  └─→ END
```

### 3.3 Conduct Live Class Flow

```
START
  │
  ├─→ Navigate to Dashboard → Today's Classes
  │
  ├─→ Select Upcoming Class
  │
  ├─→ View Class Details
  │   ├─→ Batch Name
  │   ├─→ Topic
  │   ├─→ Time
  │   ├─→ Materials Prepared
  │   └─→ Student Attendance Expected
  │
  ├─→ Click "Start Class"
  │
  ├─→ [Option A] Zoom Integration
  │   ├─→ Create Zoom Meeting
  │   ├─→ Get Meeting Link
  │   ├─→ Enable Recording
  │   └─→ Start Meeting
  │
  ├─→ [Option B] Google Meet Integration
  │   ├─→ Create Google Meet
  │   ├─→ Get Meeting Link
  │   └─→ Start Meeting
  │
  ├─→ Share Meeting Link with Students
  │   ├─→ Auto-send via Email/SMS
  │   └─→ Show in Student Portal
  │
  ├─→ Conduct Class
  │
  ├─→ [Auto] Attendance Tracking
  │   ├─→ Sync from Zoom/Meet
  │   ├─→ Mark Present Students
  │   └─→ Mark Absent Students
  │

  ├─→ End Class
  │
  ├─→ [Auto] Recording Sync
  │   ├─→ Fetch Recording from Platform
  │   ├─→ Upload to S3
  │   └─→ Tag with Topic
  │
  ├─→ Review Auto-Marked Attendance
  │   ├─→ Verify Attendance
  │   ├─→ Make Corrections
  │   └─→ Submit Attendance
  │
  ├─→ [Optional] Upload Session Notes
  │
  ├─→ [Optional] Upload Additional Materials
  │
  └─→ END
```

### 3.4 Mark Attendance Flow

```
START
  │
  ├─→ Navigate to Attendance → Mark Attendance
  │

  ├─→ Select Batch
  │
  ├─→ Select Class/Date
  │
  ├─→ View Student List
  │   ├─→ Student Name
  │   ├─→ Student ID
  │   ├─→ [Auto] Attendance Status (from Zoom/Meet)
  │   └─→ [Manual] Attendance Status
  │
  ├─→ Mark Attendance
  │   ├─→ Present
  │   ├─→ Absent
  │   ├─→ Late
  │   └─→ Excused
  │
  ├─→ [Option A] QR Code Attendance
  │   ├─→ Generate QR Code
  │   ├─→ Display QR Code
  │   ├─→ Students Scan QR Code
  │   ├─→ Auto-Mark Present
  │   └─→ Verify Attendance
  │
  ├─→ [Option B] Manual Marking
  │   ├─→ Select All/Deselect All
  │   ├─→ Individual Selection
  │   └─→ Add Remarks
  │
  ├─→ Validate Attendance
  │
  ├─→ Submit Attendance
  │
  ├─→ Send Attendance Notification to Students
  │
  ├─→ Show Success Message
  │
  └─→ END
```

### 3.5 Create Assignment Flow

```
START
  │
  ├─→ Navigate to Assignments → Create Assignment
  │
  ├─→ Select Batch
  │

  ├─→ Enter Assignment Details
  │   ├─→ Assignment Title
  │   ├─→ Description
  │   ├─→ Instructions
  │   ├─→ Topic/Module
  │   ├─→ Due Date
  │   ├─→ Due Time
  │   └─→ Maximum Marks
  │
  ├─→ Upload Resources
  │   ├─→ PDF Files
  │   ├─→ Lab Guides
  │   ├─→ Reference Materials
  │   └─→ Sample Solutions
  │
  ├─→ Configure Settings
  │   ├─→ Allow Late Submission
  │   ├─→ Late Penalty
  │   ├─→ Plagiarism Check
  │   └─→ AI Evaluation Assistance
  │
  ├─→ Preview Assignment
  │
  ├─→ Publish Assignment
  │
  ├─→ Notify Students
  │   ├─→ Send Email
  │   ├─→ Send SMS
  │   └─→ Push Notification
  │
  ├─→ Show Success Message
  │
  └─→ END
```

### 3.6 Review Assignment Flow

```
START
  │
  ├─→ Navigate to Assignments → Review
  │
  ├─→ Select Assignment
  │
  ├─→ View Submissions
  │   ├─→ Student Name
  │   ├─→ Submission Date
  │   ├─→ Status (Submitted/Late/Pending)
  │   └─→ [AI] Plagiarism Score
  │
  ├─→ Select Student Submission
  │
  ├─→ View Submission
  │   ├─→ Download Files
  │   ├─→ View Code (if applicable)
  │   ├─→ [AI] Code Quality Analysis
  │   └─→ [AI] Suggestions
  │
  ├─→ Evaluate Submission
  │   ├─→ Award Marks
  │   ├─→ Add Comments
  │   ├──→ Provide Feedback
  │   └──→ [AI] Generate Feedback
  │
  ├─→ [Optional] Request Resubmission
  │
  ├─→ Submit Evaluation
  │

  ├─→ Notify Student
  │   ├─→ Send Email
  │   └──→ Send SMS
  │
  ├─→ Show Success Message
  │
  └─→ END
```

### 3.7 Student Analytics Flow

```
START
  │
  ├─→ Navigate to Analytics → Student Performance
  │
  ├─→ Select Batch
  │

  ├─→ View Performance Overview
  │   ├─→ Average Score
  │   ├─→ Completion Rate
  │   ├─→ Attendance Rate
  │   └─→ Engagement Score
  │
  ├─→ View AI Insights
  │   ├─→ Weak Students (Risk Prediction)
  │   ├─→ Top Performers
  │   ├─→ Common Mistakes
  │   └─→ Improvement Suggestions
  │
  ├─→ [Option A] View Individual Student
  │   ├─→ Select Student
  │   ├─→ View Profile
  │   ├─→ View Attendance History
  │   ├─→ View Assignment Scores
  │   ├─→ View Progress
  │   └──→ [AI] Risk Score
  │
  ├─→ [Option B] Compare Students
  │   ├─→ Select Students
  │   ├──→ View Comparison
  │   └──→ Generate Report
  │
  ├─→ [Option C] Take Action
  │   ├─→ Send Warning to At-Risk Students
  │   ├──→ Schedule Extra Class
  │   ├──→ Assign Additional Practice
  │   └──→ Contact Student
  │
  └─→ END
```

### 3.8 Upload Recording Flow

```
START
  │
  ├─→ Navigate to Recordings → Upload
  │

  ├─→ Select Batch
  │
  ├─→ Select Class/Session
  │
  ├─→ [Auto] Check for Synced Recording
  │   ├─→ Recording Found? → Review → Tag → Publish
  │   └─→ Recording Not Found? → Manual Upload
  │
  ├─→ [Manual Upload]
  │   ├─→ Select Video File
  │   ├─→ Upload to S3
  │   ├──→ Wait for Processing
  │   └──→ Generate Thumbnails
  │
  ├─→ Add Recording Details
  │   ├─→ Title
  │   ├─→ Description
  │   ├─→ Topic Tags
  │   ├──→ Date
  │   └──→ Duration
  │

  ├─→ Configure Access
  │   ├─→ Who Can View (Batch/Course/All)
  │   ├─ Download Permission
  │   └──→ Expiry Date
  │
  ├─→ [Optional] Add Chapter Markers
  │

  ├─→ [Optional] Generate AI Summary
  │

  ├─→ Publish Recording
  │

  ├─→ Notify Students
  │

  ├─→ Show Success Message
  │
  └─→ END
```

---

## 4. Student Panel User Flows

### 4.1 Authentication Flow

```
START
  │
  ├─→ User visits Student Login URL
  │
  ├─→ Enter Email/Student ID
  │

  ├─→ Enter Password
  │

  ├─→ [Optional] Enter MFA Code
  │

  ├─→ Click Login
  │

  ├─→ Validate Credentials
  │   ├─→ Invalid? → Show Error → Retry
  │   └──→ Valid? → Continue
  │

  ├─→ Check Role (Student)
  │   ├─→ Not Student? → Redirect to appropriate panel
  │   └──→ Student? → Continue
  │

  ├─→ Generate JWT Token
  │

  ├─→ Redirect to Student Dashboard
  │

  └─→ END
```

### 4.2 Dashboard View Flow

```
START
  │
  ├─→ Navigate to Dashboard
  │

  ├─→ View My Courses
  │   ├─→ Course Name
  │   ├─→ Progress Bar
  │   ├─→ Completion %
  │   └──→ Continue Learning Button
  │

  ├─→ View My Batches
  │   ├─→ Batch Name
  │   ├─→ Course Name
  │   ├─→ Trainer Name
  │   └──→ Schedule
  │

  ├─→ View Upcoming Classes
  │   ├─→ Class Topic
  │   ├─→ Date & Time
  │   ├─→ Batch Name
  │   └──→ Join Button
  │

  ├─→ View Attendance Overview
  │   ├─→ Overall Attendance %
  │   ├─→ This Week Attendance
  │   └──→ Attendance Trend
  │

  ├─→ View Pending Assignments
  │   ├─→ Assignment Title
  │   ├─→ Due Date
  │   ├──→ Status
  │   └──→ Submit Button
  │

  ├─→ View Recent Announcements
  │   ├─→ Announcement Title
  │   ├─→ Date
  │   └──→ View Details
  │

  ├─→ View Learning Progress
  │   ├─→ Modules Completed
  │   ├─→ Videos Watched
  │   ├──→ Assignments Completed
  │   └──→ Assessments Passed
  │

  ├─→ View Certification Progress
  │   ├─→ Certificate Eligibility
  │   ├──→ Requirements Met
  │   └──→ Download Certificate (if eligible)
  │

  ├─→ [AI] View Personalized Recommendations
  │   ├─→ Recommended Topics
  │   ├──→ Practice Assignments
  │   └──→ Learning Path
  │

  └─→ END
```

### 4.3 Access Course Content Flow

```
START
  │
  ├─→ Navigate to My Courses
  │

  ├─→ Select Course
  │

  ├─→ View Course Overview
  │   ├─→ Course Description
  │   ├─→ Learning Objectives
  │   ├──→ Prerequisites
  │   └──→ Progress
  │

  ├─→ View Course Modules
  │   ├─→ Module 1
  │   │   ├─→ Video Lectures
  │   │   ├─→ PDF Notes
  │   │   ├─→ Lab Guides
  │   │   ├─→ Practice Assignments
  │   │   └──→ Assessments
  │   ├─→ Module 2
  │   └──→ ...
  │

  ├─→ Select Module
  │

  ├─→ [Option A] Watch Video Lecture
  │   ├─→ Click Video
  │   ├──→ Video Player Opens
  │   ├──→ [Features] Speed Control, Quality, Subtitles
  │   ├──→ [Features] Chapter Markers
  │   ├──→ [Features] Notes Taking
  │   ├──→ Mark as Complete
  │   └──→ Update Progress
  │

  ├─→ [Option B] Read PDF Notes
  │   ├─→ Click PDF
  │   ├──→ PDF Viewer Opens
  │   ├──→ Download PDF
  │   └──→ Mark as Read
  │

  ├─→ [Option C] Follow Lab Guide
  │   ├─→ Click Lab Guide
  │   ├──→ View Instructions
  │   ├──→ Access Cloud Lab (if available)
  │   ├──→ Complete Lab
  │   └──→ Mark as Complete
  │

  ├─→ [Option D] Complete Practice Assignment
  │   ├─→ Click Assignment
  │   ├──→ View Instructions
  │   ├──→ Download Resources
  │   ├──→ Complete Assignment
  │   ├──→ Submit Solution
  │   └──→ Mark as Complete
  │

  ├─→ [Option E] Take Assessment
  │   ├─→ Click Assessment
  │   ├──→ View Questions
  │   ├──→ Answer Questions
  │   ├──→ Submit Assessment
  │   ├──→ View Results
  │   └──→ View Feedback
  │

  ├─→ View Module Progress
  │

  └─→ END
```

### 4.4 Join Live Class Flow

```
START
  │
  ├─→ Navigate to Live Classes
  │

  ├─→ View Upcoming Classes
  │   ├─→ Class Topic
  │   ├─→ Date & Time
  │   ├─→ Batch Name
  │   ├─→ Trainer Name
  │   └──→ Join Button
  │

  ├─→ [Option A] Calendar View
  │   ├─→ View Calendar
  │   ├──→ Click on Class
  │   └──→ View Details
  │

  ├─→ Select Class
  │

  ├─→ View Class Details
  │   ├─→ Topic
  │   ├─→ Description
  │   ├─→ Materials
  │   └──→ Meeting Link
  │

  ├─→ [Before Class] Prepare
  │   ├─→ Download Materials
  │   ├──→ Review Notes
  │   └──→ Set Reminder
  │

  ├─→ Click "Join Class"
  │

  ├─→ [Option A] Zoom
  │   ├─→ Open Zoom App/Web
  │   ├──→ Join Meeting
  │   └──→ [Auto] Mark Attendance
  │

  ├─→ [Option B] Google Meet
  │   ├─→ Open Google Meet
  │   ├──→ Join Meeting
  │   └──→ [Auto] Mark Attendance
  │

  ├─→ Attend Class
  │

  ├─→ [Auto] Attendance Marked
  │

  ├─→ View Attendance Confirmation
  │

  └─→ END
```

### 4.5 View Recordings Flow

```
START
  │
  ├─→ Navigate to Recordings
  │

  ├─→ Select Filter
  │   ├─→ By Batch
  │   ├─→ By Course
  │   ├─→ By Topic
  │   └──→ By Date
  │

  ├─→ View Recording List
  │   ├─→ Recording Title
  │   ├─→ Topic
  │   ├─→ Date
  │   ├─→ Duration
  │   ├─→ Batch
  │   └──→ Views
  │

  ├─→ [Search] Enter Search Query
  │   ├─→ Search by Topic
  │   ├──→ Search by Trainer
  │   └──→ Search by Keyword
  │

  ├─→ Select Recording
  │

  ├─→ View Recording Details
  │   ├─→ Title
  │   ├─→ Description
  │   ├─→ Topic Tags
  │   ├─→ Duration
  │   ├──→ [AI] Summary
  │   └──→ Chapter Markers
  │

  ├─→ Click Play
  │

  ├─→ Video Player Opens
  │   ├─→ Play/Pause
  │   ├─→ Speed Control
  │   ├─→ Quality Selection
  │   ├─→ Fullscreen
  │   ├─→ Chapter Navigation
  │   ├─→ Notes Taking
  │   └──→ [Optional] Download (if permitted)
  │

  ├─→ View Related Recordings
  │

  ├─→ Mark as Watched
  │

  └─→ END
```

### 4.6 Submit Assignment Flow

```
START
  │
  ├─→ Navigate to Assignments
  │

  ├─→ View Assignments
  │   ├─→ Pending
  │   ├──→ Submitted
  │   ├──→ Graded
  │   └──→ Overdue
  │

  ├─→ Select Pending Assignment
  │

  ├─→ View Assignment Details
  │   ├─→ Title
  │   ├─→ Description
  │   ├─→ Instructions
  │   ├─→ Due Date
  │   ├─→ Maximum Marks
  │   └──→ Resources
  │

  ├─→ Download Resources
  │

  ├─→ Complete Assignment
  │   ├─→ Follow Instructions
  │   ├──→ Use Lab Guides
  │   ├──→ Write Code (if applicable)
  │   └──→ Prepare Solution
  │

  ├─→ Click Submit Assignment
  │

  ├─→ Upload Submission
  │   ├─→ Select Files
  │   ├─→ Upload Files
  │   ├──→ Wait for Upload
  │   └──→ Verify Upload
  │

  ├─→ [Optional] Add Comments
  │

  ├─→ Submit
  │

  ├─→ View Submission Confirmation
  │

  ├─→ [Auto] Notify Trainer
  │

  └─→ END
```

### 4.7 View Attendance Flow

```
START
  │
  ├─→ Navigate to Attendance
  │

  ├─→ View Attendance Overview
  │   ├─→ Overall Attendance %
  │   ├──→ This Month Attendance
  │   ├──→ This Week Attendance
  │   └──→ Attendance Trend Graph
  │

  ├─→ [Option A] View Calendar
  │   ├─→ View Calendar
  │   ├──→ Green = Present
  │   ├→─→ Red = Absent
  │   ├→─→ Yellow = Late
  │   └──→ Click Date for Details
  │

  ├─→ [Option B] View List
  │   ├─→ View Attendance List
  │   ├→─→ Date
  │   ├→─→ Class
  │   ├→─→ Status
  │   └──→ Remarks
  │

  ├─→ View AI Insights
  │   ├─→ Attendance Patterns
  │   ├──→ Risk Assessment
  │   └──→ Recommendations
  │

  ├─→ [Option C] QR Code Attendance
  │   ├─→ Scan QR Code (displayed by trainer)
  │   ├→─→ Verify Location (if geo-fencing enabled)
  │   ├→─→ Mark Present
  │   └──→ Show Confirmation
  │

  └─→ END
```

### 4.8 Placement Management Flow

```
START
  │
  ├─→ Navigate to Placement
  │

  ├─→ View Placement Dashboard
  │   ├─→ Placement Status
  │   ├──→ Resume Uploaded
  │   ├──→ Applications Submitted
  │   ├→─→ Interviews Scheduled
  │   ├→─→ Offers Received
  │   └──→ Placed
  │

  ├─→ [Option A] Upload/Update Resume
  │   ├─→ Upload Resume File
  │   ├→─→ [AI] Resume Analysis
  │   ├→─→ [AI] Improvement Suggestions
  │   ├→─→ Update Profile
  │   └──→ Save
  │

  ├─→ [Option B] View Job Openings
  │   ├─→ View Available Jobs
  │   ├──→ Job Title
  │   ├──→ Company
  │   ├→─→ Requirements
  │   ├→─→ Deadline
  │   └──→ Apply Button
  │

  ├─→ Apply for Job
  │   ├─→ Click Apply
  │   ├→─→ Review Application
  │   ├→─→ Submit Application
  │   ├→─→ [Auto] Attach Resume
  │   └──→ Show Confirmation
  │

  ├─→ [Option C] View My Applications
  │   ├─→ View Applied Jobs
  │   ├──→ Status
  │   ├──→ Application Date
  │   └──→ Company Response
  │

  ├─→ [Option D] Interview Schedule
  │   ├─→ View Scheduled Interviews
  │   ├──→ Date & Time
  │   ├→─→ Company
  │   ├→─→ Interview Type
  │   ├→─→ Interviewer
  │   └──→ Join/Attend
  │

  ├─→ [Option E] Mock Interviews
  │   ├─→ View Available Mock Interviews
  │   ├→─→ Schedule Mock Interview
  │   ├→─→ Attend Mock Interview
  │   ├→─→ View Feedback
  │   └──→ View Report
  │

  ├─→ [Option F] View Placement Resources
  │   ├─→ Resume Templates
  │   ├──→ Interview Tips
  │   ├→─→ Company Research
  │   └──→ Salary Guidelines
  │

  └─→ END
```

### 4.9 Profile Management Flow

```
START
  │
  ├─→ Navigate to Profile
  │

  ├─→ View Personal Information
  │   ├─→ Name
  │   ├─→ Email
  │   ├─→ Phone
  │   ├─→ Date of Birth
  │   ├─→ Address
  │   └──→ Emergency Contact
  │

  ├─→ [Option A] Edit Profile
  │   ├─→ Click Edit
  │   ├──→ Modify Information
  │   ├──→ Save Changes
  │   └──→ Show Confirmation
  │

  ├─→ View Educational Background
  │   ├─→ Qualification
  │   ├──→ Institution
  │   ├──→ Year of Passing
  │   └──→ Percentage/CGPA
  │

  ├─→ View My Courses
  │   ├─→ Enrolled Courses
  │   ├──→ Progress
  │   └──→ Completion Status
  │

  ├─→ View Certificates
  │   ├─→ Earned Certificates
  │   ├──→ Download Certificate
  │   ├──→ Verify Certificate
  │   └──→ Share Certificate
  │

  ├─→ View Payment History
  │   ├─→ Payments Made
  │   ├→─→ Payment Date
  │   ├──→ Amount
  │   ├──→ Mode
  │   └──→ Download Receipt
  │

  ├─→ [Option B] Change Password
  │   ├─→ Click Change Password
  │   ├──→ Enter Current Password
  │   ├→─→ Enter New Password
  │   ├→─→ Confirm New Password
  │   ├→─→ Save
  │   └──→ Show Confirmation
  │

  ├─→ [Option C] Configure Notifications
  │   ├─→ Email Preferences
  │   ├──→ SMS Preferences
  │   ├──→ Push Notification Preferences
  │   └──→ Save
  │

  └─→ END
```

---

## 5. Cross-Panel User Flows

### 5.1 Password Reset Flow (All Panels)

```
START
  │
  ├─→ User clicks "Forgot Password"
  │

  ├─→ Enter Email/Username
  │

  ├─→ Click "Send Reset Link"
  │

  ├─→ Validate Email/Username
  │   ├─→ Invalid? → Show Error → Retry
  │   └──→ Valid? → Continue
  │

  ├─→ Generate Reset Token
  │

  ├─→ Send Reset Email
  │

  ├─→ User clicks Reset Link in Email
  │

  ├─→ Validate Token
  │   ├─→ Invalid/Expired? → Show Error → Request New Link
  │   └──→ Valid? → Continue
  │

  ├─→ Enter New Password
  │

  ├─→ Confirm New Password
  │

  ├─→ Validate Password
  │   ├─→ Invalid? → Show Error → Retry
  │   └──→ Valid? → Continue
  │

  ├─→ Update Password
  │

  ├─→ Invalidate Reset Token
  │

  ├─→ Send Confirmation Email
  │

  ├─→ Redirect to Login
  │

  └─→ END
```

### 5.2 Notification Flow (All Panels)

```
START
  │
  ├─→ System Event Triggered
  │   ├─→ Class Scheduled
  │   ├──→ Assignment Created
  │   ├──→ Assignment Due Reminder
  │   ├──→ Attendance Marked
  │   ├──→ Recording Published
  │   ├──→ Announcement Posted
  │   ├──→ Payment Received
  │   └──→ Placement Update
  │

  ├─→ Determine Recipients
  │   ├─→ Based on Role
  │   ├──→ Based on Batch
  │   ├──→ Based on Course
  │   └──→ Based on Preferences
  │

  ├─→ Check Notification Preferences
  │   ├─→ Email Enabled?
  │   ├──→ SMS Enabled?
  │   └──→ Push Notification Enabled?
  │

  ├─→ [Email] Send Email
  │   ├─→ Use Template
  │   ├→─→ Personalize Content
  │   ├──→ Send Email
  │   └──→ Log Delivery
  │

  ├─→ [SMS] Send SMS
  │   ├─→ Use Template
  │   ├→─→ Personalize Content
  │   ├→─→ Send SMS
  │   └──→ Log Delivery
  │

  ├─→ [Push] Send Push Notification
  │   ├─→ Use Template
  │   ├→─→ Personalize Content
  │   ├→─→ Send Push
  │   └──→ Log Delivery
  │

  ├─→ [In-App] Show Notification
  │   ├─→ Add to Notification Center
  │   └──→ Show Badge
  │

  └─→ END
```

---

## 6. Error Handling Flows

### 6.1 Session Timeout Flow

```
START
  │
  ├─→ User Session Expires
  │

  ├─→ Detect Session Timeout
  │

  ├─→ Show Session Timeout Modal
  │   ├─→ Message: "Your session has expired"
  │   ├──→ Option: "Login Again"
  │   └──→ Option: "Stay Logged In" (if refresh token valid)
  │

  ├─→ [Option A] Login Again
  │   ├─→ Redirect to Login Page
  │   ├──→ User Enters Credentials
  │   ├──→ Authenticate
  │   └──→ Redirect to Previous Page
  │

  ├─→ [Option B] Stay Logged In
  │   ├─→ Use Refresh Token
  │   ├→─→ Generate New Access Token
  │   ├→─→ Continue Session
  │   └──→ Refresh Page
  │

  └─→ END
```

### 6.2 Network Error Flow

```
START
  │
  ├─→ Network Request Fails
  │

  ├─→ Detect Network Error
  │

  ├─→ Show Error Message
  │   ├─→ Message: "Network error. Please check your connection."
  │   ├──→ Option: "Retry"
  │   └──→ Option: "Cancel"
  │

  ├─→ [Option A] Retry
  │   ├─→ Retry Request
  │   ├──→ Success? → Continue
  │   └──→ Fail? → Show Error Again
  │

  ├─→ [Option B] Cancel
  │   ├─→ Cancel Operation
  │   ├→─→ Save Draft (if applicable)
  │   └──→ Return to Previous State
  │

  └─→ END
```

---

## 7. Summary

This document provides comprehensive user flows for all 4 panels of the TIMP platform:

- **Super Admin Panel:** 7 major flows covering institute management, user management, and system administration
- **Admin Panel:** 8 major flows covering student management, batch management, and operations
- **Trainer Panel:** 8 major flows covering class management, attendance, assignments, and analytics
- **Student Panel:** 9 major flows covering learning, assignments, attendance, and placement
- **Cross-Panel Flows:** 3 flows covering authentication, notifications, and error handling

These flows serve as the foundation for UI/UX design and implementation.

# API Documentation - Training Institute Management Platform

## Executive Summary

This document provides comprehensive API documentation for the Training Institute Management Platform (TIMP), covering all endpoints for the 4 panels (Super Admin, Admin, Trainer, Student).

---

## 1. API Overview

### 1.1 Base URL
- **Production:** `https://api.timp.com/v1`
- **Staging:** `https://api-staging.timp.com/v1`
- **Development:** `http://localhost:3000/v1`

### 1.2 Authentication
- **Method:** JWT Bearer Token
- **Header:** `Authorization: Bearer <token>`
- **Token Expiry:** 15 minutes (access token), 7 days (refresh token)

### 1.3 Response Format
All API responses follow this structure:

```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "errors": [],
  "meta": {
    "timestamp": "2026-06-25T12:00:00Z",
    "requestId": "uuid"
  }
}
```

### 1.4 Error Response Format

```json
{
  "success": false,
  "data": null,
  "message": "Error message",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ],
  "meta": {
    "timestamp": "2026-06-25T12:00:00Z",
    "requestId": "uuid"
  }
}
```

### 1.5 HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

### 1.6 Rate Limiting
- **Standard:** 1000 requests per hour per IP
- **Authenticated:** 5000 requests per hour per user
- **Headers:** `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

---

## 2. Authentication APIs

### 2.1 Login

**Endpoint:** `POST /auth/login`  
**Description:** Authenticate user and return JWT tokens  
**Roles:** All  
**Public:** Yes

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "mfaCode": "123456",
  "role": "student"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "student",
      "instituteId": "uuid"
    },
    "tokens": {
      "accessToken": "jwt-access-token",
      "refreshToken": "jwt-refresh-token",
      "expiresIn": 900
    }
  },
  "message": "Login successful"
}
```

---

### 2.2 Refresh Token

**Endpoint:** `POST /auth/refresh`  
**Description:** Refresh access token using refresh token  
**Roles:** All  
**Public:** Yes

**Request Body:**
```json
{
  "refreshToken": "jwt-refresh-token"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "accessToken": "new-jwt-access-token",
    "expiresIn": 900
  },
  "message": "Token refreshed successfully"
}
```

---

### 2.3 Logout

**Endpoint:** `POST /auth/logout`  
**Description:** Invalidate current session  
**Roles:** All  
**Public:** No

**Request Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": null,
  "message": "Logout successful"
}
```

---

### 2.4 Forgot Password

**Endpoint:** `POST /auth/forgot-password`  
**Description:** Request password reset link  
**Roles:** All  
**Public:** Yes

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "data": null,
  "message": "Password reset link sent to email"
}
```

---

### 2.5 Reset Password

**Endpoint:** `POST /auth/reset-password`  
**Description:** Reset password using reset token  
**Roles:** All  
**Public:** Yes

**Request Body:**
```json
{
  "token": "reset-token",
  "newPassword": "newSecurePassword123",
  "confirmPassword": "newSecurePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "data": null,
  "message": "Password reset successful"
}
```

---

### 2.6 Google OAuth

**Endpoint:** `POST /auth/google`  
**Description:** Authenticate using Google OAuth  
**Roles:** All  
**Public:** Yes

**Request Body:**
```json
{
  "idToken": "google-id-token",
  "role": "student"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@gmail.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "student"
    },
    "tokens": {
      "accessToken": "jwt-access-token",
      "refreshToken": "jwt-refresh-token"
    }
  },
  "message": "Google authentication successful"
}
```

---

## 3. Super Admin APIs

### 3.1 Institutes

#### Create Institute
**Endpoint:** `POST /super-admin/institutes`  
**Description:** Create a new institute  
**Roles:** super_admin  
**Public:** No

**Request Body:**
```json
{
  "name": "Tech Training Institute",
  "code": "TTI",
  "domain": "tti.timp.com",
  "subdomain": "tti",
  "contactEmail": "admin@tti.com",
  "contactPhone": "+1234567890",
  "address": "123 Tech Street",
  "city": "San Francisco",
  "state": "CA",
  "country": "USA",
  "postalCode": "94105",
  "timezone": "America/Los_Angeles",
  "currency": "USD",
  "primaryColor": "#3B82F6",
  "secondaryColor": "#10B981",
  "adminEmail": "admin@tti.com",
  "adminFirstName": "Admin",
  "adminLastName": "User"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Tech Training Institute",
    "code": "TTI",
    "domain": "tti.timp.com",
    "status": "active",
    "createdAt": "2026-06-25T12:00:00Z"
  },
  "message": "Institute created successfully"
}
```

---

#### List Institutes
**Endpoint:** `GET /super-admin/institutes`  
**Description:** List all institutes  
**Roles:** super_admin  
**Public:** No

**Query Parameters:**
- `page` (integer, default: 1)
- `limit` (integer, default: 20)
- `status` (string: active, suspended, deleted)
- `search` (string)

**Response:**
```json
{
  "success": true,
  "data": {
    "institutes": [
      {
        "id": "uuid",
        "name": "Tech Training Institute",
        "code": "TTI",
        "status": "active",
        "studentCount": 1500,
        "trainerCount": 25,
        "batchCount": 50,
        "createdAt": "2026-06-25T12:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100,
      "totalPages": 5
    }
  }
}
```

---

#### Update Institute
**Endpoint:** `PUT /super-admin/institutes/:id`  
**Description:** Update institute details  
**Roles:** super_admin  
**Public:** No

**Request Body:**
```json
{
  "name": "Updated Institute Name",
  "contactEmail": "newemail@tti.com",
  "status": "active"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Updated Institute Name",
    "contactEmail": "newemail@tti.com"
  },
  "message": "Institute updated successfully"
}
```

---

#### Delete Institute
**Endpoint:** `DELETE /super-admin/institutes/:id`  
**Description:** Delete an institute (soft delete)  
**Roles:** super_admin  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": null,
  "message": "Institute deleted successfully"
}
```

---

### 3.2 Branches

#### Create Branch
**Endpoint:** `POST /super-admin/institutes/:instituteId/branches`  
**Description:** Create a new branch for an institute  
**Roles:** super_admin  
**Public:** No

**Request Body:**
```json
{
  "name": "Downtown Branch",
  "code": "DT",
  "address": "456 Downtown Ave",
  "city": "San Francisco",
  "state": "CA",
  "country": "USA",
  "postalCode": "94102",
  "contactPerson": "Jane Smith",
  "contactEmail": "jane@tti.com",
  "contactPhone": "+1234567891",
  "capacity": 500
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Downtown Branch",
    "code": "DT",
    "instituteId": "uuid",
    "status": "active"
  },
  "message": "Branch created successfully"
}
```

---

### 3.3 Users

#### Create User
**Endpoint:** `POST /super-admin/users`  
**Description:** Create a new user (any role)  
**Roles:** super_admin  
**Public:** No

**Request Body:**
```json
{
  "instituteId": "uuid",
  "branchId": "uuid",
  "email": "user@example.com",
  "phone": "+1234567890",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe",
  "role": "admin",
  "status": "active"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "admin",
    "status": "active"
  },
  "message": "User created successfully"
}
```

---

### 3.4 Analytics

#### Get Overall Analytics
**Endpoint:** `GET /super-admin/analytics/overview`  
**Description:** Get overall platform analytics  
**Roles:** super_admin  
**Public:** No

**Query Parameters:**
- `startDate` (date, ISO format)
- `endDate` (date, ISO format)

**Response:**
```json
{
  "success": true,
  "data": {
    "totalInstitutes": 50,
    "totalStudents": 50000,
    "totalTrainers": 1000,
    "totalBatches": 2000,
    "totalRevenue": 5000000,
    "activeStudents": 45000,
    "activeBatches": 1800,
    "placementRate": 85,
    "averageAttendance": 78,
    "growth": {
      "students": 15,
      "revenue": 20,
      "placements": 10
    }
  },
  "message": "Analytics retrieved successfully"
}
```

---

### 3.5 Audit Logs

#### Get Audit Logs
**Endpoint:** `GET /super-admin/audit-logs`  
**Description:** Get audit logs with filters  
**Roles:** super_admin  
**Public:** No

**Query Parameters:**
- `page` (integer)
- `limit` (integer)
- `userId` (uuid)
- `action` (string)
- `entityType` (string)
- `startDate` (date)
- `endDate` (date)

**Response:**
```json
{
  "success": true,
  "data": {
    "logs": [
      {
        "id": "uuid",
        "userId": "uuid",
        "userEmail": "admin@example.com",
        "action": "UPDATE",
        "entityType": "institute",
        "entityId": "uuid",
        "oldValues": {},
        "newValues": {},
        "ipAddress": "192.168.1.1",
        "createdAt": "2026-06-25T12:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 1000
    }
  }
}
```

---

## 4. Admin APIs

### 4.1 Students

#### Create Student
**Endpoint:** `POST /admin/students`  
**Description:** Create a new student  
**Roles:** admin  
**Public:** No

**Request Body:**
```json
{
  "email": "student@example.com",
  "phone": "+1234567890",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": "2000-01-01",
  "address": "123 Student St",
  "city": "San Francisco",
  "state": "CA",
  "country": "USA",
  "postalCode": "94105",
  "highestQualification": "Bachelor's",
  "universityCollege": "State University",
  "yearOfPassing": 2022,
  "percentageCgpa": 85,
  "courseId": "uuid",
  "batchId": "uuid",
  "feeStructureId": "uuid"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "studentId": "STU2026001",
    "email": "student@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "batchId": "uuid",
    "enrollmentDate": "2026-06-25",
    "status": "active"
  },
  "message": "Student created successfully"
}
```

---

#### Bulk Import Students
**Endpoint:** `POST /admin/students/bulk-import`  
**Description:** Bulk import students from CSV/Excel  
**Roles:** admin  
**Public:** No

**Request:** `multipart/form-data`
- `file`: CSV/Excel file
- `batchId`: uuid
- `courseId`: uuid
- `feeStructureId`: uuid

**Response:**
```json
{
  "success": true,
  "data": {
    "importId": "uuid",
    "totalRecords": 100,
    "successCount": 95,
    "failureCount": 5,
    "failures": [
      {
        "row": 5,
        "error": "Invalid email format"
      }
    ]
  },
  "message": "Import completed"
}
```

---

#### List Students
**Endpoint:** `GET /admin/students`  
**Description:** List students with filters  
**Roles:** admin  
**Public:** No

**Query Parameters:**
- `page` (integer)
- `limit` (integer)
- `batchId` (uuid)
- `courseId` (uuid)
- `status` (string: active, completed, dropped)
- `search` (string)

**Response:**
```json
{
  "success": true,
  "data": {
    "students": [
      {
        "id": "uuid",
        "studentId": "STU2026001",
        "email": "student@example.com",
        "firstName": "John",
        "lastName": "Doe",
        "batchName": "DevOps Batch 1",
        "courseName": "DevOps Engineering",
        "attendancePercentage": 85,
        "progressPercentage": 60,
        "status": "active",
        "enrollmentDate": "2026-06-25"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 1500
    }
  }
}
```

---

#### Get Student Details
**Endpoint:** `GET /admin/students/:id`  
**Description:** Get detailed student information  
**Roles:** admin  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "studentId": "STU2026001",
    "personalInfo": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "student@example.com",
      "phone": "+1234567890",
      "dateOfBirth": "2000-01-01",
      "address": "123 Student St"
    },
    "educationalInfo": {
      "highestQualification": "Bachelor's",
      "universityCollege": "State University",
      "yearOfPassing": 2022,
      "percentageCgpa": 85
    },
    "enrollmentInfo": {
      "courseId": "uuid",
      "courseName": "DevOps Engineering",
      "batchId": "uuid",
      "batchName": "DevOps Batch 1",
      "enrollmentDate": "2026-06-25",
      "status": "active"
    },
    "progress": {
      "attendancePercentage": 85,
      "progressPercentage": 60,
      "completedModules": 6,
      "totalModules": 10,
      "averageScore": 78
    },
    "feeInfo": {
      "totalAmount": 5000,
      "paidAmount": 2500,
      "pendingAmount": 2500,
      "feeStatus": "partial"
    }
  }
}
```

---

### 4.2 Batches

#### Create Batch
**Endpoint:** `POST /admin/batches`  
**Description:** Create a new batch  
**Roles:** admin  
**Public:** No

**Request Body:**
```json
{
  "courseId": "uuid",
  "branchId": "uuid",
  "name": "DevOps Batch 1",
  "code": "DOB1",
  "description": "DevOps Engineering batch",
  "startDate": "2026-07-01",
  "endDate": "2026-12-31",
  "capacity": 50,
  "timing": "evening",
  "customTiming": "6:00 PM - 9:00 PM",
  "mode": "online",
  "classDays": "mon-fri",
  "primaryTrainerId": "uuid",
  "secondaryTrainerId": "uuid",
  "attendanceRequirementPercentage": 75,
  "minimumPassingScore": 60,
  "recordingAccessPolicy": "immediate"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "DevOps Batch 1",
    "code": "DOB1",
    "courseId": "uuid",
    "status": "upcoming",
    "enrolledCount": 0,
    "capacity": 50
  },
  "message": "Batch created successfully"
}
```

---

#### List Batches
**Endpoint:** `GET /admin/batches`  
**Description:** List batches with filters  
**Roles:** admin  
**Public:** No

**Query Parameters:**
- `page` (integer)
- `limit` (integer)
- `courseId` (uuid)
- `status` (string: upcoming, active, completed, cancelled)
- `trainerId` (uuid)

**Response:**
```json
{
  "success": true,
  "data": {
    "batches": [
      {
        "id": "uuid",
        "name": "DevOps Batch 1",
        "code": "DOB1",
        "courseName": "DevOps Engineering",
        "primaryTrainerName": "John Trainer",
        "startDate": "2026-07-01",
        "endDate": "2026-12-31",
        "enrolledCount": 45,
        "capacity": 50,
        "status": "active",
        "healthScore": 85
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 50
    }
  }
}
```

---

#### Assign Students to Batch
**Endpoint:** `POST /admin/batches/:id/students`  
**Description:** Assign students to a batch  
**Roles:** admin  
**Public:** No

**Request Body:**
```json
{
  "studentIds": ["uuid1", "uuid2", "uuid3"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "assignedCount": 3,
    "failedCount": 0
  },
  "message": "Students assigned successfully"
}
```

---

### 4.3 Trainers

#### Create Trainer
**Endpoint:** `POST /admin/trainers`  
**Description:** Create a new trainer  
**Roles:** admin  
**Public:** No

**Request Body:**
```json
{
  "email": "trainer@example.com",
  "phone": "+1234567890",
  "password": "securePassword123",
  "firstName": "Jane",
  "lastName": "Smith",
  "expertise": ["DevOps", "AWS", "Docker"],
  "experience": 5,
  "hourlyRate": 50
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "trainer@example.com",
    "firstName": "Jane",
    "lastName": "Smith",
    "expertise": ["DevOps", "AWS", "Docker"],
    "status": "active"
  },
  "message": "Trainer created successfully"
}
```

---

#### Assign Trainer to Batch
**Endpoint:** `POST /admin/batches/:id/trainers`  
**Description:** Assign trainer to batch  
**Roles:** admin  
**Public:** No

**Request Body:**
```json
{
  "trainerId": "uuid",
  "role": "primary"
}
```

**Response:**
```json
{
  "success": true,
  "data": null,
  "message": "Trainer assigned successfully"
}
```

---

### 4.4 Courses

#### Create Course
**Endpoint:** `POST /admin/courses`  
**Description:** Create a new course  
**Roles:** admin  
**Public:** No

**Request Body:**
```json
{
  "categoryId": "uuid",
  "name": "DevOps Engineering",
  "code": "DOE",
  "description": "Comprehensive DevOps course",
  "shortDescription": "Learn DevOps from scratch",
  "durationHours": 120,
  "difficultyLevel": "intermediate",
  "prerequisites": "Basic Linux knowledge",
  "learningObjectives": [
    "Understand DevOps principles",
    "Master CI/CD pipelines",
    "Learn containerization"
  ],
  "price": 5000,
  "currency": "USD",
  "installmentOptions": {
    "enabled": true,
    "count": 3,
    "amounts": [2000, 1500, 1500]
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "DevOps Engineering",
    "code": "DOE",
    "status": "draft"
  },
  "message": "Course created successfully"
}
```

---

### 4.5 Attendance Reports

#### Get Attendance Report
**Endpoint:** `GET /admin/reports/attendance`  
**Description:** Generate attendance report  
**Roles:** admin  
**Public:** No

**Query Parameters:**
- `batchId` (uuid)
- `startDate` (date)
- `endDate` (date)
- `reportType` (string: daily, weekly, monthly)

**Response:**
```json
{
  "success": true,
  "data": {
    "reportType": "monthly",
    "period": {
      "startDate": "2026-06-01",
      "endDate": "2026-06-30"
    },
    "summary": {
      "totalStudents": 50,
      "averageAttendance": 78,
      "presentDays": 22,
      "totalDays": 28
    },
    "studentWise": [
      {
        "studentId": "uuid",
        "studentName": "John Doe",
        "presentDays": 20,
        "absentDays": 8,
        "attendancePercentage": 71.4
      }
    ],
    "aiInsights": {
      "atRiskStudents": [
        {
          "studentId": "uuid",
          "studentName": "Jane Smith",
          "riskScore": 85,
          "factors": ["Low attendance", "Missed assignments"]
        }
      ]
    }
  }
}
```

---

### 4.6 Placement

#### Create Job Opening
**Endpoint:** `POST /admin/placement/job-openings`  
**Description:** Create a new job opening  
**Roles:** admin  
**Public:** No

**Request Body:**
```json
{
  "companyId": "uuid",
  "title": "DevOps Engineer",
  "description": "Looking for experienced DevOps engineer",
  "requirements": "3+ years experience",
  "responsibilities": "Manage CI/CD pipelines",
  "skillsRequired": ["DevOps", "AWS", "Docker", "Kubernetes"],
  "experienceRequiredMin": 3,
  "experienceRequiredMax": 5,
  "salaryMin": 80000,
  "salaryMax": 120000,
  "location": "San Francisco",
  "jobType": "full_time",
  "workMode": "hybrid",
  "applicationDeadline": "2026-07-31",
  "vacancyCount": 5
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "DevOps Engineer",
    "status": "open"
  },
  "message": "Job opening created successfully"
}
```

---

#### Get Placement Dashboard
**Endpoint:** `GET /admin/placement/dashboard`  
**Description:** Get placement analytics dashboard  
**Roles:** admin  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "overview": {
      "totalPlaced": 120,
      "placementRate": 85,
      "averagePackage": 95000,
      "companiesVisited": 50,
      "openPositions": 25
    },
    "recentPlacements": [
      {
        "studentId": "uuid",
        "studentName": "John Doe",
        "company": "Tech Corp",
        "position": "DevOps Engineer",
        "package": 100000,
        "placedDate": "2026-06-20"
      }
    ],
    "upcomingInterviews": [
      {
        "studentId": "uuid",
        "studentName": "Jane Smith",
        "company": "Cloud Inc",
        "position": "Cloud Engineer",
        "scheduledDate": "2026-06-28"
      }
    ]
  }
}
```

---

### 4.7 Fees

#### Get Fee Overview
**Endpoint:** `GET /admin/fees/overview`  
**Description:** Get fee collection overview  
**Roles:** admin  
**Public:** No

**Query Parameters:**
- `startDate` (date)
- `endDate` (date)

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalFees": 250000,
      "collectedFees": 200000,
      "pendingFees": 50000,
      "overdueFees": 10000,
      "collectionRate": 80
    },
    "pendingStudents": [
      {
        "studentId": "uuid",
        "studentName": "John Doe",
        "pendingAmount": 2500,
        "dueDate": "2026-06-30"
      }
    ]
  }
}
```

---

#### Record Payment
**Endpoint:** `POST /admin/fees/payments`  
**Description:** Record a fee payment  
**Roles:** admin  
**Public:** No

**Request Body:**
```json
{
  "studentFeeId": "uuid",
  "amount": 2500,
  "paymentMode": "online",
  "paymentGateway": "stripe",
  "transactionId": "txn_123456",
  "notes": "First installment"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "amount": 2500,
    "paymentStatus": "success",
    "receiptUrl": "https://s3.timp.com/receipts/uuid.pdf"
  },
  "message": "Payment recorded successfully"
}
```

---

## 5. Trainer APIs

### 5.1 Dashboard

#### Get Trainer Dashboard
**Endpoint:** `GET /trainer/dashboard`  
**Description:** Get trainer dashboard data  
**Roles:** trainer  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "todaySchedule": [
      {
        "batchScheduleId": "uuid",
        "batchName": "DevOps Batch 1",
        "topic": "Docker Containers",
        "startTime": "2026-06-25T18:00:00Z",
        "endTime": "2026-06-25T21:00:00Z",
        "meetingLink": "https://zoom.us/j/123456",
        "studentCount": 45
      }
    ],
    "assignedBatches": [
      {
        "id": "uuid",
        "name": "DevOps Batch 1",
        "courseName": "DevOps Engineering",
        "enrolledCount": 45,
        "progress": 60,
        "nextClass": "2026-06-26T18:00:00Z"
      }
    ],
    "pendingTasks": {
      "attendanceToMark": 2,
      "assignmentsToReview": 15,
      "recordingsToUpload": 1
    },
    "studentPerformance": {
      "weakStudents": [
        {
          "studentId": "uuid",
          "studentName": "Jane Smith",
          "riskScore": 85,
          "attendancePercentage": 60,
          "averageScore": 55
        }
      ],
      "topPerformers": [
        {
          "studentId": "uuid",
          "studentName": "John Doe",
          "attendancePercentage": 95,
          "averageScore": 92
        }
      ]
    },
    "batchHealthScores": [
      {
        "batchId": "uuid",
        "batchName": "DevOps Batch 1",
        "healthScore": 85,
        "attendanceScore": 80,
        "engagementScore": 85,
        "performanceScore": 90
      }
    ]
  }
}
```

---

### 5.2 Classes

#### Start Live Class
**Endpoint:** `POST /trainer/classes/:id/start`  
**Description:** Start a live class (create meeting)  
**Roles:** trainer  
**Public:** No

**Request Body:**
```json
{
  "platform": "zoom",
  "enableRecording": true
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "meetingId": "123456789",
    "meetingUrl": "https://zoom.us/j/123456789",
    "startUrl": "https://zoom.us/s/123456789?start",
    "password": "abc123"
  },
  "message": "Meeting created successfully"
}
```

---

#### End Class
**Endpoint:** `POST /trainer/classes/:id/end`  
**Description:** End a live class  
**Roles:** trainer  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "recordingStatus": "processing",
    "autoAttendanceSynced": true
  },
  "message": "Class ended successfully"
}
```

---

### 5.3 Attendance

#### Mark Attendance
**Endpoint:** `POST /trainer/attendance/mark`  
**Description:** Mark attendance for a class  
**Roles:** trainer  
**Public:** No

**Request Body:**
```json
{
  "batchScheduleId": "uuid",
  "attendance": [
    {
      "studentId": "uuid",
      "status": "present",
      "checkInTime": "2026-06-25T18:05:00Z",
      "remarks": ""
    },
    {
      "studentId": "uuid",
      "status": "absent",
      "remarks": "Medical leave"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "markedCount": 45,
    "presentCount": 40,
    "absentCount": 5
  },
  "message": "Attendance marked successfully"
}
```

---

#### Generate QR Code
**Endpoint:** `POST /trainer/attendance/qr-code`  
**Description:** Generate QR code for attendance  
**Roles:** trainer  
**Public:** No

**Request Body:**
```json
{
  "batchScheduleId": "uuid",
  "validForMinutes": 10,
  "location": {
    "latitude": 37.7749,
    "longitude": -122.4194,
    "radiusMeters": 100
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "qrCodeData": "uuid-encoded-data",
    "qrCodeImageUrl": "https://s3.timp.com/qr-codes/uuid.png",
    "validFrom": "2026-06-25T18:00:00Z",
    "validUntil": "2026-06-25T18:10:00Z"
  },
  "message": "QR code generated successfully"
}
```

---

### 5.4 Assignments

#### Create Assignment
**Endpoint:** `POST /trainer/assignments`  
**Description:** Create a new assignment  
**Roles:** trainer  
**Public:** No

**Request Body:**
```json
{
  "batchId": "uuid",
  "lessonId": "uuid",
  "title": "Docker Assignment",
  "description": "Create a Dockerfile for a Node.js application",
  "instructions": "Follow the lab guide...",
  "dueDate": "2026-07-01",
  "dueTime": "23:59",
  "maxMarks": 100,
  "allowLateSubmission": true,
  "lateSubmissionPenaltyPercentage": 10,
  "plagiarismCheckEnabled": true,
  "aiEvaluationEnabled": true,
  "resources": [
    {
      "name": "Lab Guide",
      "url": "https://s3.timp.com/resources/lab-guide.pdf"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Docker Assignment",
    "dueDate": "2026-07-01T23:59:00Z",
    "status": "published"
  },
  "message": "Assignment created successfully"
}
```

---

#### Review Assignment
**Endpoint:** `POST /trainer/assignments/:id/review`  
**Description:** Review and grade assignment submission  
**Roles:** trainer  
**Public:** No

**Request Body:**
```json
{
  "submissionId": "uuid",
  "marksAwarded": 85,
  "feedback": "Good work, but improve error handling",
  "status": "evaluated"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "marksAwarded": 85,
    "status": "evaluated"
  },
  "message": "Assignment reviewed successfully"
}
```

---

#### Get Assignment Submissions
**Endpoint:** `GET /trainer/assignments/:id/submissions`  
**Description:** Get all submissions for an assignment  
**Roles:** trainer  
**Public:** No

**Query Parameters:**
- `status` (string: pending, evaluated, all)

**Response:**
```json
{
  "success": true,
  "data": {
    "submissions": [
      {
        "id": "uuid",
        "studentId": "uuid",
        "studentName": "John Doe",
        "submittedAt": "2026-06-25T12:00:00Z",
        "status": "pending",
        "plagiarismScore": 5,
        "aiEvaluationScore": 82,
        "files": [
          {
            "name": "solution.zip",
            "url": "https://s3.timp.com/submissions/solution.zip"
          }
        ]
      }
    ]
  }
}
```

---

### 5.5 Recordings

#### Upload Recording
**Endpoint:** `POST /trainer/recordings`  
**Description:** Upload class recording  
**Roles:** trainer  
**Public:** No

**Request:** `multipart/form-data`
- `batchScheduleId`: uuid
- `videoFile`: video file
- `title`: string
- `description`: string
- `topicTags`: array of strings

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Docker Containers - Class 1",
    "videoUrl": "https://s3.timp.com/recordings/uuid.mp4",
    "thumbnailUrl": "https://s3.timp.com/thumbnails/uuid.jpg",
    "status": "processing"
  },
  "message": "Recording uploaded successfully"
}
```

---

### 5.6 Student Analytics

#### Get Student Performance
**Endpoint:** `GET /trainer/analytics/students`  
**Description:** Get student performance analytics  
**Roles:** trainer  
**Public:** No

**Query Parameters:**
- `batchId` (uuid)

**Response:**
```json
{
  "success": true,
  "data": {
    "batchId": "uuid",
    "batchName": "DevOps Batch 1",
    "summary": {
      "averageScore": 78,
      "averageAttendance": 85,
      "completionRate": 60,
      "engagementScore": 80
    },
    "students": [
      {
        "studentId": "uuid",
        "studentName": "John Doe",
        "attendancePercentage": 95,
        "averageScore": 92,
        "completedAssignments": 15,
        "totalAssignments": 20,
        "riskScore": 10,
        "riskLevel": "low"
      }
    ],
    "aiInsights": {
      "weakStudents": [
        {
          "studentId": "uuid",
          "studentName": "Jane Smith",
          "riskScore": 85,
          "riskLevel": "high",
          "factors": ["Low attendance", "Missed assignments"],
          "recommendations": ["Schedule one-on-one session", "Provide additional resources"]
        }
      ],
      "commonMistakes": [
        "Docker file optimization",
        "Container security"
      ]
    }
  }
}
```

---

## 6. Student APIs

### 6.1 Dashboard

#### Get Student Dashboard
**Endpoint:** `GET /student/dashboard`  
**Description:** Get student dashboard data  
**Roles:** student  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "myCourses": [
      {
        "id": "uuid",
        "name": "DevOps Engineering",
        "thumbnailUrl": "https://s3.timp.com/courses/thumbnail.jpg",
        "progressPercentage": 60,
        "completedModules": 6,
        "totalModules": 10,
        "nextLesson": {
          "id": "uuid",
          "title": "Kubernetes Basics",
          "type": "video"
        }
      }
    ],
    "myBatches": [
      {
        "id": "uuid",
        "name": "DevOps Batch 1",
        "courseName": "DevOps Engineering",
        "trainerName": "Jane Smith",
        "schedule": "Mon-Fri 6PM-9PM",
        "mode": "online"
      }
    ],
    "upcomingClasses": [
      {
        "batchScheduleId": "uuid",
        "topic": "Kubernetes Basics",
        "date": "2026-06-26",
        "time": "18:00",
        "meetingLink": "https://zoom.us/j/123456"
      }
    ],
    "attendanceOverview": {
      "overallPercentage": 85,
      "thisWeek": 80,
      "thisMonth": 82,
      "trend": "stable"
    },
    "pendingAssignments": [
      {
        "id": "uuid",
        "title": "Kubernetes Assignment",
        "dueDate": "2026-06-28",
        "maxMarks": 100,
        "status": "pending"
      }
    ],
    "recentAnnouncements": [
      {
        "id": "uuid",
        "title": "Holiday on Friday",
        "content": "Institute will be closed on Friday...",
        "createdAt": "2026-06-25T10:00:00Z"
      }
    ],
    "learningProgress": {
      "modulesCompleted": 6,
      "videosWatched": 45,
      "assignmentsCompleted": 15,
      "assessmentsPassed": 5
    },
    "certificationProgress": {
      "eligible": false,
      "requirementsMet": [
        "Attendance >= 75%",
        "Assignments >= 80%"
      ],
      "requirementsPending": [
        "Final Assessment"
      ]
    },
    "aiRecommendations": [
      {
        "type": "topic",
        "title": "Review Docker Networking",
        "reason": "Based on your assessment performance"
      },
      {
        "type": "practice",
        "title": "Complete Kubernetes Lab",
        "reason": "To improve practical skills"
      }
    ]
  }
}
```

---

### 6.2 Courses

#### Get My Courses
**Endpoint:** `GET /student/courses`  
**Description:** Get enrolled courses  
**Roles:** student  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "courses": [
      {
        "id": "uuid",
        "name": "DevOps Engineering",
        "code": "DOE",
        "description": "Comprehensive DevOps course",
        "thumbnailUrl": "https://s3.timp.com/courses/thumbnail.jpg",
        "progressPercentage": 60,
        "enrollmentDate": "2026-06-01",
        "completionDate": null,
        "status": "in_progress"
      }
    ]
  }
}
```

---

#### Get Course Details
**Endpoint:** `GET /student/courses/:id`  
**Description:** Get course details with modules  
**Roles:** student  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "DevOps Engineering",
    "description": "Comprehensive DevOps course",
    "learningObjectives": [
      "Understand DevOps principles",
      "Master CI/CD pipelines"
    ],
    "progressPercentage": 60,
    "modules": [
      {
        "id": "uuid",
        "name": "Introduction to DevOps",
        "sortOrder": 1,
        "durationHours": 10,
        "isPublished": true,
        "progressPercentage": 100,
        "lessons": [
          {
            "id": "uuid",
            "title": "What is DevOps?",
            "lessonType": "video",
            "durationMinutes": 30,
            "isCompleted": true,
            "isFree": false
          },
          {
            "id": "uuid",
            "title": "DevOps Principles",
            "lessonType": "pdf",
            "isCompleted": true
          }
        ]
      }
    ]
  }
}
```

---

#### Get Lesson Content
**Endpoint:** `GET /student/lessons/:id`  
**Description:** Get lesson content  
**Roles:** student  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Docker Containers",
    "lessonType": "video",
    "contentUrl": "https://s3.timp.com/videos/uuid.m3u8",
    "durationMinutes": 45,
    "description": "Learn about Docker containers",
    "resources": [
      {
        "name": "Slides",
        "url": "https://s3.timp.com/resources/slides.pdf"
      },
      {
        "name": "Lab Guide",
        "url": "https://s3.timp.com/resources/lab-guide.pdf"
      }
    ],
    "labGuide": {
      "id": "uuid",
      "instructions": "Step-by-step instructions...",
      "cloudLabId": "lab-123",
      "estimatedTimeMinutes": 60
    },
    "progress": {
      "isCompleted": false,
      "watchDurationSeconds": 1200,
      "lastPositionSeconds": 1200
    }
  }
}
```

---

#### Mark Lesson Complete
**Endpoint:** `POST /student/lessons/:id/complete`  
**Description:** Mark lesson as complete  
**Roles:** student  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "lessonId": "uuid",
    "isCompleted": true,
    "completedAt": "2026-06-25T12:00:00Z"
  },
  "message": "Lesson marked as complete"
}
```

---

#### Update Lesson Progress
**Endpoint:** `POST /student/lessons/:id/progress`  
**Description:** Update lesson watch progress  
**Roles:** student  
**Public:** No

**Request Body:**
```json
{
  "watchDurationSeconds": 1800,
  "lastPositionSeconds": 1800
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "watchDurationSeconds": 1800,
    "lastPositionSeconds": 1800
  },
  "message": "Progress updated"
}
```

---

### 6.3 Live Classes

#### Get Upcoming Classes
**Endpoint:** `GET /student/live-classes`  
**Description:** Get upcoming live classes  
**Roles:** student  
**Public:** No

**Query Parameters:**
- `batchId` (uuid, optional)

**Response:**
```json
{
  "success": true,
  "data": {
    "classes": [
      {
        "id": "uuid",
        "batchScheduleId": "uuid",
        "batchName": "DevOps Batch 1",
        "topic": "Kubernetes Basics",
        "scheduledDate": "2026-06-26",
        "startTime": "18:00",
        "endTime": "21:00",
        "trainerName": "Jane Smith",
        "meetingLink": "https://zoom.us/j/123456",
        "meetingPlatform": "zoom",
        "materials": [
          {
            "name": "Pre-class reading",
            "url": "https://s3.timp.com/materials/reading.pdf"
          }
        ]
      }
    ]
  }
}
```

---

#### Join Class
**Endpoint:** `POST /student/live-classes/:id/join`  
**Description:** Join a live class  
**Roles:** student  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "meetingUrl": "https://zoom.us/j/123456",
    "meetingId": "123456",
    "password": "abc123",
    "joinedAt": "2026-06-26T18:00:00Z"
  },
  "message": "Joined class successfully"
}
```

---

### 6.4 Recordings

#### Get Recordings
**Endpoint:** `GET /student/recordings`  
**Description:** Get available recordings  
**Roles:** student  
**Public:** No

**Query Parameters:**
- `batchId` (uuid, optional)
- `courseId` (uuid, optional)
- `topic` (string, optional)
- `search` (string, optional)

**Response:**
```json
{
  "success": true,
  "data": {
    "recordings": [
      {
        "id": "uuid",
        "title": "Docker Containers - Class 1",
        "description": "Introduction to Docker containers",
        "thumbnailUrl": "https://s3.timp.com/thumbnails/uuid.jpg",
        "videoUrl": "https://s3.timp.com/recordings/uuid.m3u8",
        "durationSeconds": 5400,
        "recordingDate": "2026-06-25",
        "batchName": "DevOps Batch 1",
        "topicTags": ["docker", "containers"],
        "chapterMarkers": [
          {
            "time": 0,
            "title": "Introduction"
          },
          {
            "time": 1800,
            "title": "Docker Commands"
          }
        ],
        "aiSummary": "This class covers Docker container basics...",
        "viewsCount": 45,
        "isWatched": false,
        "downloadAllowed": false
      }
    ]
  }
}
```

---

### 6.5 Assignments

#### Get My Assignments
**Endpoint:** `GET /student/assignments`  
**Description:** Get student assignments  
**Roles:** student  
**Public:** No

**Query Parameters:**
- `status` (string: pending, submitted, graded, overdue, all)

**Response:**
```json
{
  "success": true,
  "data": {
    "assignments": [
      {
        "id": "uuid",
        "title": "Docker Assignment",
        "description": "Create a Dockerfile",
        "dueDate": "2026-06-28T23:59:00Z",
        "maxMarks": 100,
        "status": "pending",
        "resources": [
          {
            "name": "Lab Guide",
            "url": "https://s3.timp.com/resources/lab.pdf"
          }
        ]
      }
    ]
  }
}
```

---

#### Submit Assignment
**Endpoint:** `POST /student/assignments/:id/submit`  
**Description:** Submit assignment  
**Roles:** student  
**Public:** No

**Request:** `multipart/form-data`
- `files`: files
- `textContent`: string (optional)
- `codeContent`: string (optional)
- `comments`: string (optional)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "submissionStatus": "submitted",
    "submittedAt": "2026-06-25T12:00:00Z"
  },
  "message": "Assignment submitted successfully"
}
```

---

#### Get Assignment Feedback
**Endpoint:** `GET /student/assignments/:id/feedback`  
**Description:** Get assignment feedback  
**Roles:** student  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "assignmentId": "uuid",
    "title": "Docker Assignment",
    "submission": {
      "submittedAt": "2026-06-25T12:00:00Z",
      "files": [
        {
          "name": "solution.zip",
          "url": "https://s3.timp.com/submissions/solution.zip"
        }
      ]
    },
    "evaluation": {
      "marksAwarded": 85,
      "maxMarks": 100,
      "feedback": "Good work, but improve error handling",
      "evaluatedAt": "2026-06-26T10:00:00Z",
      "evaluatedBy": "Jane Smith"
    },
    "aiFeedback": {
      "score": 82,
      "suggestions": [
        "Add error handling in Dockerfile",
        "Optimize image size"
      ]
    }
  }
}
```

---

### 6.6 Attendance

#### Get My Attendance
**Endpoint:** `GET /student/attendance`  
**Description:** Get attendance history  
**Roles:** student  
**Public:** No

**Query Parameters:**
- `batchId` (uuid, optional)
- `startDate` (date, optional)
- `endDate` (date, optional)

**Response:**
```json
{
  "success": true,
  "data": {
    "overview": {
      "overallPercentage": 85,
      "thisWeek": 80,
      "thisMonth": 82,
      "totalClasses": 40,
      "presentClasses": 34,
      "absentClasses": 6
    },
    "calendar": [
      {
        "date": "2026-06-25",
        "status": "present",
        "topic": "Docker Containers"
      },
      {
        "date": "2026-06-24",
        "status": "absent",
        "remarks": "Medical leave"
      }
    ],
    "aiInsights": {
      "attendancePattern": "Consistent",
      "riskScore": 15,
      "riskLevel": "low",
      "recommendations": [
        "Maintain current attendance",
        "Focus on completing assignments"
      ]
    }
  }
}
```

---

#### Mark Attendance via QR Code
**Endpoint:** `POST /student/attendance/qr-scan`  
**Description:** Mark attendance by scanning QR code  
**Roles:** student  
**Public:** No

**Request Body:**
```json
{
  "qrCodeData": "uuid-encoded-data",
  "location": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "attendanceId": "uuid",
    "status": "present",
    "markedAt": "2026-06-25T18:05:00Z",
    "batchScheduleId": "uuid",
    "topic": "Docker Containers"
  },
  "message": "Attendance marked successfully"
}
```

---

### 6.7 Placement

#### Get Placement Dashboard
**Endpoint:** `GET /student/placement/dashboard`  
**Description:** Get placement dashboard  
**Roles:** student  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "placementStatus": {
      "resumeUploaded": true,
      "resumeScore": 85,
      "applicationsSubmitted": 5,
      "interviewsScheduled": 2,
      "offersReceived": 0,
      "placed": false
    },
    "myApplications": [
      {
        "id": "uuid",
        "jobTitle": "DevOps Engineer",
        "companyName": "Tech Corp",
        "appliedAt": "2026-06-20",
        "status": "interview_scheduled",
        "nextInterview": {
          "date": "2026-06-28",
          "time": "14:00",
          "type": "technical"
        }
      }
    ],
    "jobOpenings": [
      {
        "id": "uuid",
        "title": "DevOps Engineer",
        "companyName": "Cloud Inc",
        "location": "San Francisco",
        "salaryMin": 80000,
        "salaryMax": 120000,
        "skillsRequired": ["DevOps", "AWS", "Docker"],
        "applicationDeadline": "2026-07-15",
        "isEligible": true
      }
    ],
    "mockInterviews": [
      {
        "id": "uuid",
        "scheduledDate": "2026-06-30",
        "time": "10:00",
        "interviewer": "Jane Smith",
        "type": "technical"
      }
    ]
  }
}
```

---

#### Upload Resume
**Endpoint:** `POST /student/placement/resume`  
**Description:** Upload or update resume  
**Roles:** student  
**Public:** No

**Request:** `multipart/form-data`
- `file`: PDF file

**Response:**
```json
{
  "success": true,
  "data": {
    "resumeUrl": "https://s3.timp.com/resumes/uuid.pdf",
    "resumeScore": 85,
    "resumeFeedback": [
      "Good technical skills section",
      "Add more project details",
      "Improve formatting"
    ],
    "uploadedAt": "2026-06-25T12:00:00Z"
  },
  "message": "Resume uploaded successfully"
}
```

---

#### Apply for Job
**Endpoint:** `POST /student/placement/jobs/:id/apply`  
**Description:** Apply for a job opening  
**Roles:** student  
**Public:** No

**Request Body:**
```json
{
  "coverLetter": "I am interested in this position..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "applicationId": "uuid",
    "status": "applied",
    "appliedAt": "2026-06-25T12:00:00Z"
  },
  "message": "Application submitted successfully"
}
```

---

### 6.8 Profile

#### Get My Profile
**Endpoint:** `GET /student/profile`  
**Description:** Get student profile  
**Roles:** student  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "personalInfo": {
      "id": "uuid",
      "studentId": "STU2026001",
      "firstName": "John",
      "lastName": "Doe",
      "email": "student@example.com",
      "phone": "+1234567890",
      "dateOfBirth": "2000-01-01",
      "address": "123 Student St",
      "city": "San Francisco",
      "country": "USA"
    },
    "educationalInfo": {
      "highestQualification": "Bachelor's",
      "universityCollege": "State University",
      "yearOfPassing": 2022,
      "percentageCgpa": 85
    },
    "skills": ["DevOps", "AWS", "Docker", "Linux"],
    "socialLinks": {
      "linkedin": "https://linkedin.com/in/johndoe",
      "github": "https://github.com/johndoe",
      "portfolio": "https://johndoe.dev"
    },
    "certificates": [
      {
        "id": "uuid",
        "courseName": "DevOps Engineering",
        "issueDate": "2026-06-25",
        "certificateUrl": "https://s3.timp.com/certificates/uuid.pdf",
        "verificationUrl": "https://timp.com/verify/uuid"
      }
    ],
    "paymentHistory": [
      {
        "id": "uuid",
        "amount": 2500,
        "paymentDate": "2026-06-01",
        "paymentMode": "online",
        "receiptUrl": "https://s3.timp.com/receipts/uuid.pdf"
      }
    ]
  }
}
```

---

#### Update Profile
**Endpoint:** `PUT /student profile`  
**Description:** Update student profile  
**Roles:** student  
**Public:** No

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890",
  "address": "123 Student St",
  "city": "San Francisco",
  "country": "USA",
  "skills": ["DevOps", "AWS", "Docker", "Linux"],
  "socialLinks": {
    "linkedin": "https://linkedin.com/in/johndoe",
    "github": "https://github.com/johndoe"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "firstName": "John",
    "lastName": "Doe"
  },
  "message": "Profile updated successfully"
}
```

---

## 7. Common APIs

### 7.1 File Upload

#### Upload File
**Endpoint:** `POST /common/upload`  
**Description:** Upload file to S3  
**Roles:** All  
**Public:** No

**Request:** `multipart/form-data`
- `file`: file
- `folder`: string (e.g., "assignments", "recordings", "avatars")

**Response:**
```json
{
  "success": true,
  "data": {
    "url": "https://s3.timp.com/assignments/uuid.pdf",
    "fileName": "document.pdf",
    "fileSize": 1024000,
    "mimeType": "application/pdf"
  },
  "message": "File uploaded successfully"
}
```

---

### 7.2 Notifications

#### Get Notifications
**Endpoint:** `GET /common/notifications`  
**Description:** Get user notifications  
**Roles:** All  
**Public:** No

**Query Parameters:**
- `page` (integer)
- `limit` (integer)
- `unreadOnly` (boolean)

**Response:**
```json
{
  "success": true,
  "data": {
    "notifications": [
      {
        "id": "uuid",
        "type": "assignment_due",
        "title": "Assignment Due Tomorrow",
        "message": "Docker Assignment is due tomorrow",
        "actionUrl": "/student/assignments/uuid",
        "isRead": false,
        "createdAt": "2026-06-25T10:00:00Z"
      }
    ],
    "unreadCount": 5
  }
}
```

---

#### Mark Notification Read
**Endpoint:** `PUT /common/notifications/:id/read`  
**Description:** Mark notification as read  
**Roles:** All  
**Public:** No

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "isRead": true,
    "readAt": "2026-06-25T12:00:00Z"
  },
  "message": "Notification marked as read"
}
```

---

### 7.3 Search

#### Global Search
**Endpoint:** `GET /common/search`  
**Description:** Global search across platform  
**Roles:** All  
**Public:** No

**Query Parameters:**
- `q` (string) - search query
- `type` (string) - courses, batches, students, recordings, all

**Response:**
```json
{
  "success": true,
  "data": {
    "results": [
      {
        "type": "course",
        "id": "uuid",
        "title": "DevOps Engineering",
        "description": "Comprehensive DevOps course",
        "url": "/student/courses/uuid"
      },
      {
        "type": "recording",
        "id": "uuid",
        "title": "Docker Containers - Class 1",
        "thumbnailUrl": "https://s3.timp.com/thumbnails/uuid.jpg",
        "url": "/student/recordings/uuid"
      }
    ]
  }
}
```

---

## 8. Webhooks

### 8.1 Webhook Configuration

#### Create Webhook
**Endpoint:** `POST /admin/webhooks`  
**Description:** Create webhook endpoint  
**Roles:** admin  
**Public:** No

**Request Body:**
```json
{
  "url": "https://your-domain.com/webhook",
  "events": [
    "student.enrolled",
    "payment.succeeded",
    "assignment.submitted",
    "attendance.marked"
  ],
  "secret": "webhook-secret-key"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "url": "https://your-domain.com/webhook",
    "events": ["student.enrolled", "payment.succeeded"],
    "status": "active"
  },
  "message": "Webhook created successfully"
}
```

---

### 8.2 Webhook Events

#### Student Enrolled
```json
{
  "event": "student.enrolled",
  "timestamp": "2026-06-25T12:00:00Z",
  "data": {
    "studentId": "uuid",
    "studentEmail": "student@example.com",
    "studentName": "John Doe",
    "courseId": "uuid",
    "courseName": "DevOps Engineering",
    "batchId": "uuid",
    "batchName": "DevOps Batch 1",
    "enrollmentDate": "2026-06-25"
  }
}
```

---

#### Payment Succeeded
```json
{
  "event": "payment.succeeded",
  "timestamp": "2026-06-25T12:00:00Z",
  "data": {
    "paymentId": "uuid",
    "studentId": "uuid",
    "studentEmail": "student@example.com",
    "amount": 2500,
    "currency": "USD",
    "paymentMode": "online",
    "transactionId": "txn_123456"
  }
}
```

---

#### Assignment Submitted
```json
{
  "event": "assignment.submitted",
  "timestamp": "2026-06-25T12:00:00Z",
  "data": {
    "submissionId": "uuid",
    "assignmentId": "uuid",
    "studentId": "uuid",
    "studentEmail": "student@example.com",
    "submittedAt": "2026-06-25T12:00:00Z"
  }
}
```

---

## 9. API Rate Limits by Role

| Role | Requests/Hour | Burst Limit |
|------|---------------|-------------|
| Super Admin | 10000 | 200 |
| Admin | 5000 | 100 |
| Trainer | 3000 | 50 |
| Student | 1000 | 20 |
| Public | 500 | 10 |

---

## 10. API Versioning

- **Current Version:** v1
- **Version Format:** `/v1/endpoint`
- **Deprecation Policy:** 6 months notice before deprecation
- **Backward Compatibility:** Maintained within major versions

---

## 11. SDKs

### 11.1 JavaScript/TypeScript SDK

```typescript
import { TIMPClient } from '@timp/sdk';

const client = new TIMPClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.timp.com/v1'
});

// Login
const loginResponse = await client.auth.login({
  email: 'user@example.com',
  password: 'password'
});

// Get student dashboard
const dashboard = await client.student.getDashboard();
```

### 11.2 Python SDK

```python
from timp_sdk import TIMPClient

client = TIMPClient(
    api_key='your-api-key',
    base_url='https://api.timp.com/v1'
)

# Login
login_response = client.auth.login(
    email='user@example.com',
    password='password'
)

# Get student dashboard
dashboard = client.student.get_dashboard()
```

---

## 12. Testing

### 12.1 Sandbox Environment
- **URL:** `https://api-sandbox.timp.com/v1`
- **Purpose:** Testing without affecting production data
- **Data:** Reset daily

### 12.2 Test Credentials
- **Super Admin:** `superadmin@timp.com` / `Test123!`
- **Admin:** `admin@timp.com` / `Test123!`
- **Trainer:** `trainer@timp.com` / `Test123!`
- **Student:** `student@timp.com` / `Test123!`

---

## 13. Support

- **API Documentation:** https://docs.timp.com/api
- **Support Email:** api-support@timp.com
- **Status Page:** https://status.timp.com
- **GitHub Issues:** https://github.com/timp/api/issues

---

## 14. Changelog

### v1.0.0 (2026-06-25)
- Initial API release
- Authentication endpoints
- Super Admin endpoints
- Admin endpoints
- Trainer endpoints
- Student endpoints
- Common endpoints
- Webhooks

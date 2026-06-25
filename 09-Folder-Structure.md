# Project Folder Structure - Training Institute Management Platform

## Executive Summary

This document defines the complete folder structure for the Training Institute Management Platform (TIMP), following best practices for monorepo architecture with microservices.

---

## 1. Root Directory Structure

```
training-institute-platform/
├── README.md
├── LICENSE
├── .gitignore
├── .dockerignore
├── docker-compose.yml
├── docker-compose.prod.yml
├── package.json
├── turbo.json
├── .env.example
├── .env.local
├── .env.production
├── .prettierrc
├── .eslintrc.json
├── tsconfig.json
├── tsconfig.base.json
├── .github/
│   ├── workflows/
│   │   ├── ci-cd.yml
│   │   ├── deploy-staging.yml
│   │   └── deploy-production.yml
│   └── ISSUE_TEMPLATE/
├── apps/
├── packages/
├── infrastructure/
├── docs/
├── scripts/
└── tests/
```

---

## 2. Applications Directory (apps/)

```
apps/
├── super-admin-panel/          # Super Admin Frontend (React.js + Vite)
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── .env.local
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── logo.svg
│   │   └── robots.txt
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   │   └── index.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── index.tsx
│   │   │   ├── institutes/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── index.tsx
│   │   │   ├── users/
│   │   │   │   ├── index.tsx
│   │   │   │   └── create/
│   │   │   │       └── index.tsx
│   │   │   ├── analytics/
│   │   │   │   └── index.tsx
│   │   │   ├── audit-logs/
│   │   │   │   └── index.tsx
│   │   │   └── settings/
│   │   │       └── index.tsx
│   │   ├── components/
│   │   │   ├── ui/              # Bootstrap + Tailwind components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   └── ...
│   │   │   ├── layout/
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── header.tsx
│   │   │   │   └── footer.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├── stats-card.tsx
│   │   │   │   ├── chart-card.tsx
│   │   │   │   └── activity-list.tsx
│   │   │   ├── institutes/
│   │   │   │   ├── institute-card.tsx
│   │   │   │   ├── institute-form.tsx
│   │   │   │   └── institute-table.tsx
│   │   │   └── shared/
│   │   │       ├── loading-spinner.tsx
│   │   │       ├── error-boundary.tsx
│   │   │       └── notification.tsx
│   │   ├── lib/
│   │   │   ├── api.ts            # API client
│   │   │   ├── auth.ts           # Auth utilities
│   │   │   ├── utils.ts          # Utility functions
│   │   │   └── constants.ts      # Constants
│   │   ├── hooks/
│   │   │   ├── use-auth.ts
│   │   │   ├── use-api.ts
│   │   │   └── use-toast.ts
│   │   ├── store/
│   │   │   ├── auth-store.ts
│   │   │   └── ui-store.ts
│   │   └── types/
│   │       ├── index.ts
│   │       ├── institute.ts
│   │       ├── user.ts
│   │       └── analytics.ts
│   └── .turbo/
│
├── admin-panel/                # Admin Frontend (React.js + Vite)
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── .env.local
│   ├── public/
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   │   └── index.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── index.tsx
│   │   │   ├── students/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── bulk-import/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── index.tsx
│   │   │   ├── batches/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── index.tsx
│   │   │   ├── trainers/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── index.tsx
│   │   │   ├── courses/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── index.tsx
│   │   │   ├── attendance/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── reports/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── analytics/
│   │   │   │       └── index.tsx
│   │   │   ├── assignments/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── index.tsx
│   │   │   ├── recordings/
│   │   │   │   ├── index.tsx
│   │   │   │   └── upload/
│   │   │   │       └── index.tsx
│   │   │   ├── placement/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── job-openings/
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── applications/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── interviews/
│   │   │   │       └── index.tsx
│   │   │   ├── fees/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── structure/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── payments/
│   │   │   │       └── index.tsx
│   │   │   ├── announcements/
│   │   │   │   ├── index.tsx
│   │   │   │   └── create/
│   │   │   │       └── page.tsx
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── layout/
│   │   │   ├── dashboard/
│   │   │   ├── students/
│   │   │   ├── batches/
│   │   │   ├── courses/
│   │   │   ├── attendance/
│   │   │   ├── assignments/
│   │   │   ├── placement/
│   │   │   └── shared/
│   │   ├── lib/
│   │   ├── hooks/
│   │   ├── store/
│   │   └── types/
│   └── .turbo/
│
├── trainer-panel/              # Trainer Frontend (React.js + Vite)
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── .env.local
│   ├── public/
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   │   └── index.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── index.tsx
│   │   │   ├── batches/
│   │   │   │   ├── index.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── index.tsx
│   │   │   ├── classes/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── today/
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── upcoming/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── past/
│   │   │   │       └── index.tsx
│   │   │   ├── attendance/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── mark/
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── qr-code/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── history/
│   │   │   │       └── index.tsx
│   │   │   ├── assignments/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── review/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── index.tsx
│   │   │   ├── recordings/
│   │   │   │   ├── index.tsx
│   │   │   │   └── upload/
│   │   │   │       └── index.tsx
│   │   │   ├── students/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── performance/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── index.tsx
│   │   │   ├── announcements/
│   │   │   │   ├── index.tsx
│   │   │   │   └── create/
│   │   │   │       └── index.tsx
│   │   │   └── profile/
│   │   │       └── index.tsx
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── layout/
│   │   │   ├── dashboard/
│   │   │   ├── classes/
│   │   │   ├── attendance/
│   │   │   ├── assignments/
│   │   │   ├── students/
│   │   │   └── shared/
│   │   ├── lib/
│   │   ├── hooks/
│   │   ├── store/
│   │   └── types/
│   └── .turbo/

└── student-panel/              # Student Frontend (React.js + Vite)
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── tailwind.config.js
    ├── .env.local
    ├── public/
    ├── src/
    │   ├── main.tsx
    │   ├── App.tsx
    │   ├── index.css
    │   ├── pages/
    │   │   ├── login/
    │   │   │   └── index.tsx
    │   │   ├── dashboard/
    │   │   │   └── index.tsx
    │   │   ├── courses/
    │   │   │   ├── index.tsx
    │   │   │   └── [id]/
    │   │   │       └── index.tsx
    │   │   ├── modules/
    │   │   │   └── [id]/
    │   │   │       └── index.tsx
    │   │   ├── lessons/
    │   │   │   └── [id]/
    │   │   │       └── index.tsx
    │   │   ├── live-classes/
    │   │   │   ├── index.tsx
    │   │   │   ├── calendar/
    │   │   │   │   └── index.tsx
    │   │   │   └── [id]/
    │   │   │       └── index.tsx
    │   │   ├── attendance/
    │   │   │   ├── index.tsx
    │   │   │   └── history/
    │   │   │       └── index.tsx
    │   │   ├── assignments/
    │   │   │   ├── index.tsx
    │   │   │   ├── [id]/
    │   │   │   │   └── index.tsx
    │   │   │   └── submit/
    │   │   │       └── index.tsx
    │   │   ├── recordings/
    │   │   │   ├── index.tsx
    │   │   │   └── [id]/
    │   │   │       └── index.tsx
    │   │   ├── placement/
    │   │   │   ├── index.tsx
    │   │   │   ├── jobs/
    │   │   │   │   └── index.tsx
    │   │   │   ├── applications/
    │   │   │   │   └── index.tsx
    │   │   │   ├── interviews/
    │   │   │   │   └── index.tsx
    │   │   │   └── profile/
    │   │   │       └── index.tsx
    │   │   ├── fees/
    │   │   │   ├── index.tsx
    │   │   │   └── payments/
    │   │   │       └── index.tsx
    │   │   ├── certificates/
    │   │   │   └── index.tsx
    │   │   ├── announcements/
    │   │   │   └── index.tsx
    │   │   └── profile/
    │   │       └── index.tsx
    │   ├── components/
    │   │   ├── ui/
    │   │   ├── layout/
    │   │   ├── dashboard/
    │   │   ├── courses/
    │   │   ├── attendance/
    │   │   ├── assignments/
    │   │   ├── placement/
    │   │   └── shared/
    │   ├── lib/
    │   ├── hooks/
    │   ├── store/
    │   └── types/
    └── .turbo/
```

---

## 3. Packages Directory (packages/)

```
packages/
├── ui/                         # Shared UI components (Bootstrap + Tailwind)
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── button.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── checkbox.tsx
│   │   │   │   ├── radio.tsx
│   │   │   │   ├── switch.tsx
│   │   │   │   ├── slider.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   ├── toast.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── progress.tsx
│   │   │   │   ├── calendar.tsx
│   │   │   │   ├── date-picker.tsx
│   │   │   │   └── ...
│   │   │   ├── layout/
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── header.tsx
│   │   │   │   └── footer.tsx
│   │   │   └── shared/
│   │   │       ├── loading-spinner.tsx
│   │   │       ├── error-boundary.tsx
│   │   │       ├── empty-state.tsx
│   │   │       └── page-header.tsx
│   │   ├── lib/
│   │   │   ├── utils.ts
│   │   │   └── cn.ts
│   │   └── index.ts
│   └── .turbo/
│
├── api-client/                 # Shared API client
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── client.ts
│   │   ├── endpoints/
│   │   │   ├── auth.ts
│   │   │   ├── super-admin.ts
│   │   │   ├── admin.ts
│   │   │   ├── trainer.ts
│   │   │   ├── student.ts
│   │   │   └── common.ts
│   │   ├── types/
│   │   │   ├── index.ts
│   │   │   ├── common.ts
│   │   │   └── responses.ts
│   │   ├── interceptors/
│   │   │   ├── auth.interceptor.ts
│   │   │   ├── error.interceptor.ts
│   │   │   └── logging.interceptor.ts
│   │   └── index.ts
│   └── .turbo/
│
├── auth-lib/                   # Shared authentication library
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── jwt.ts
│   │   ├── oauth.ts
│   │   ├── session.ts
│   │   ├── permissions.ts
│   │   └── index.ts
│   └── .turbo/
│
├── config/                     # Shared configuration
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── api.ts
│   │   ├── env.ts
│   │   ├── constants.ts
│   │   └── index.ts
│   └── .turbo/
│
├── types/                      # Shared TypeScript types
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── index.ts
│   │   ├── user.ts
│   │   ├── institute.ts
│   │   ├── course.ts
│   │   ├── batch.ts
│   │   ├── attendance.ts
│   │   ├── assignment.ts
│   │   ├── recording.ts
│   │   ├── placement.ts
│   │   ├── fee.ts
│   │   └── api.ts
│   └── .turbo/
│
├── utils/                      # Shared utility functions
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── date.ts
│   │   ├── string.ts
│   │   ├── number.ts
│   │   ├── validation.ts
│   │   ├── format.ts
│   │   └── index.ts
│   └── .turbo/
│
└── hooks/                      # Shared React hooks
    ├── package.json
    ├── tsconfig.json
    ├── src/
    │   ├── use-auth.ts
    │   ├── use-api.ts
    │   ├── use-toast.ts
    │   ├── use-modal.ts
    │   ├── use-debounce.ts
    │   ├── use-local-storage.ts
    │   └── index.ts
    └── .turbo/
```

---

## 4. Backend Services Directory

```
services/
├── api-gateway/                # API Gateway Service
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   ├── .env.example
│   ├── src/
│   │   ├── index.ts
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── config/
│   │   │   ├── index.ts
│   │   │   ├── database.ts
│   │   │   ├── redis.ts
│   │   │   └── aws.ts
│   │   ├── routes/
│   │   │   ├── index.ts
│   │   │   ├── auth.routes.ts
│   │   │   ├── super-admin.routes.ts
│   │   │   ├── admin.routes.ts
│   │   │   ├── trainer.routes.ts
│   │   │   ├── student.routes.ts
│   │   │   └── common.routes.ts
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   ├── rbac.middleware.ts
│   │   │   ├── rate-limit.middleware.ts
│   │   │   ├── validation.middleware.ts
│   │   │   └── error.middleware.ts
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   ├── super-admin.controller.ts
│   │   │   ├── admin.controller.ts
│   │   │   ├── trainer.controller.ts
│   │   │   ├── student.controller.ts
│   │   │   └── common.controller.ts
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── super-admin.service.ts
│   │   │   ├── admin.service.ts
│   │   │   ├── trainer.service.ts
│   │   │   ├── student.service.ts
│   │   │   └── common.service.ts
│   │   ├── validators/
│   │   │   ├── auth.validator.ts
│   │   │   ├── institute.validator.ts
│   │   │   ├── user.validator.ts
│   │   │   └── course.validator.ts
│   │   ├── utils/
│   │   │   ├── logger.ts
│   │   │   ├── error.ts
│   │   │   └── response.ts
│   │   └── types/
│   │       └── index.ts
│   ├── tests/
│   │   ├── unit/
│   │   ├── integration/
│   │   └── e2e/
│   └── .turbo/
│
├── auth-service/              # Authentication Service
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   ├── .env.example
│   ├── src/
│   │   ├── index.ts
│   │   ├── app.ts
│   │   ├── config/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   │   ├── jwt.service.ts
│   │   │   ├── oauth.service.ts
│   │   │   ├── mfa.service.ts
│   │   │   └── session.service.ts
│   │   ├── middleware/
│   │   └── utils/
│   ├── tests/
│   └── .turbo/
│
├── video-service/             # Video Processing Service
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   ├── .env.example
│   ├── src/
│   │   ├── index.ts
│   │   ├── app.ts
│   │   ├── config/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   │   ├── upload.service.ts
│   │   │   ├── transcode.service.ts
│   │   │   ├── thumbnail.service.ts
│   │   │   └── metadata.service.ts
│   │   ├── processors/
│   │   │   ├── ffmpeg.processor.ts
│   │   │   └── mediaconvert.processor.ts
│   │   └── utils/
│   ├── tests/
│   └── .turbo/
│
├── ai-service/                # AI/ML Service
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   ├── .env.example
│   ├── src/
│   │   ├── index.ts
│   │   ├── app.ts
│   │   ├── config/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   │   ├── risk-prediction.service.ts
│   │   │   ├── batch-health.service.ts
│   │   │   ├── learning-recommendation.service.ts
│   │   │   ├── assignment-evaluation.service.ts
│   │   │   ├── session-summary.service.ts
│   │   │   └── chatbot.service.ts
│   │   ├── models/
│   │   │   ├── risk.model.ts
│   │   │   ├── health.model.ts
│   │   │   └── recommendation.model.ts
│   │   └── utils/
│   ├── tests/
│   └── .turbo/
│
├── notification-service/      # Notification Service
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   ├── .env.example
│   ├── src/
│   │   ├── index.ts
│   │   ├── app.ts
│   │   ├── config/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   │   ├── email.service.ts
│   │   │   ├── sms.service.ts
│   │   │   ├── push.service.ts
│   │   │   └── in-app.service.ts
│   │   ├── templates/
│   │   │   ├── email/
│   │   │   │   ├── welcome.html
│   │   │   │   ├── assignment-due.html
│   │   │   │   └── class-reminder.html
│   │   │   └── sms/
│   │   │       ├── assignment-due.txt
│   │   │       └── class-reminder.txt
│   │   └── utils/
│   ├── tests/
│   └── .turbo/
│
└── worker-service/            # Background Worker Service
    ├── package.json
    ├── tsconfig.json
    ├── Dockerfile
    ├── .env.example
    ├── src/
    │   ├── index.ts
    │   ├── app.ts
    │   ├── config/
    │   ├── jobs/
    │   │   ├── email.job.ts
    │   │   ├── sms.job.ts
    │   │   ├── video-processing.job.ts
    │   │   ├── report-generation.job.ts
    │   │   ├── cleanup.job.ts
    │   │   └── ai-training.job.ts
    │   ├── processors/
    │   ├── queues/
    │   └── utils/
    ├── tests/
    └── .turbo/
```

---

## 5. Infrastructure Directory (infrastructure/)

```
infrastructure/
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── provider.tf
│   ├── backend.tf
│   ├── modules/
│   │   ├── vpc/
│   │   │   ├── main.tf
│   │   │   ├── variables.tf
│   │   │   └── outputs.tf
│   │   ├── ecs/
│   │   │   ├── main.tf
│   │   │   ├── variables.tf
│   │   │   └── outputs.tf
│   │   ├── rds/
│   │   │   ├── main.tf
│   │   │   ├── variables.tf
│   │   │   └── outputs.tf
│   │   ├── s3/
│   │   │   ├── main.tf
│   │   │   ├── variables.tf
│   │   │   └── outputs.tf
│   │   ├── cloudfront/
│   │   │   ├── main.tf
│   │   │   ├── variables.tf
│   │   │   └── outputs.tf
│   │   ├── alb/
│   │   │   ├── main.tf
│   │   │   ├── variables.tf
│   │   │   └── outputs.tf
│   │   └── security/
│   │       ├── main.tf
│   │       ├── variables.tf
│   │       └── outputs.tf
│   └── environments/
│       ├── dev/
│       │   ├── terraform.tfvars
│       │   └── backend.tf
│       ├── staging/
│       │   ├── terraform.tfvars
│       │   └── backend.tf
│       └── production/
│           ├── terraform.tfvars
│           └── backend.tf
│
├── cdk/
│   ├── app.ts
│   ├── cdk.json
│   ├── bin/
│   │   └── timp.ts
│   ├── lib/
│   │   ├── network-stack.ts
│   │   ├── database-stack.ts
│   │   ├── application-stack.ts
│   │   ├── monitoring-stack.ts
│   │   └── security-stack.ts
│   └── config/
│       └── cdk-config.json
│
└── docker/
    ├── Dockerfile.frontend
    ├── Dockerfile.backend
    ├── Dockerfile.worker
    ├── docker-compose.yml
    └── docker-compose.prod.yml
```

---

## 6. Documentation Directory (docs/)

```
docs/
├── 01-PRD.md
├── 02-Feature-Comparison-Edmingle.md
├── 03-Missing-Features-Enhancements.md
├── 04-User-Flows.md
├── 05-Database-Schema.md
├── 06-API-Documentation.md
├── 07-Wireframes-Navigation.md
├── 08-AWS-Architecture.md
├── 09-Folder-Structure.md
├── 10-Development-Roadmap.md
├── 11-Timeline-Estimation.md
├── 12-UI-UX-Recommendations.md
├── 13-Mobile-App-Strategy.md
├── api/
│   ├── authentication.md
│   ├── super-admin.md
│   ├── admin.md
│   ├── trainer.md
│   └── student.md
├── guides/
│   ├── setup.md
│   ├── deployment.md
│   ├── testing.md
│   └── troubleshooting.md
└── architecture/
    ├── system-design.md
    ├── database-design.md
    └── security-design.md
```

---

## 7. Scripts Directory (scripts/)

```
scripts/
├── setup.sh                  # Initial setup script
├── build.sh                  # Build all services
├── deploy.sh                 # Deploy to environment
├── test.sh                   # Run all tests
├── lint.sh                  # Run linter
├── migrate.sh                # Run database migrations
├── seed.sh                  # Seed database
├── backup.sh                 # Backup database
├── cleanup.sh                # Cleanup resources
└── generate-types.sh         # Generate TypeScript types
```

---

## 8. Tests Directory (tests/)

```
tests/
├── e2e/
│   ├── auth.spec.ts
│   ├── super-admin.spec.ts
│   ├── admin.spec.ts
│   ├── trainer.spec.ts
│   └── student.spec.ts
├── performance/
│   ├── load-test.js
│   └── stress-test.js
└── security/
    ├── sql-injection.test.ts
    ├── xss.test.ts
    └── auth-bypass.test.ts
```

---

## 9. Configuration Files

### Root Level Files

```
training-institute-platform/
├── .gitignore
├── .dockerignore
├── .prettierrc
├── .eslintrc.json
├── tsconfig.json
├── tsconfig.base.json
├── turbo.json
├── package.json
├── docker-compose.yml
├── docker-compose.prod.yml
├── .env.example
├── .env.local
└── .env.production
```

### .gitignore

```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/
*.lcov

# Next.js
.next/
out/
build/
dist/

# Production
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Misc
.DS_Store
*.pem

# Debug
.vscode/
.idea/

# Local env files
.env*.local
.env

# Turbo
.turbo/

# AWS
.aws-sam/

# Terraform
*.tfstate
*.tfstate.*
.terraform/
.terraform.lock.hcl

# Build artifacts
*.tsbuildinfo
```

### turbo.json

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "outputs": []
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    },
    "clean": {
      "cache": false
    }
  }
}
```

---

## 10. Environment Variables

### .env.example

```bash
# Application
NODE_ENV=development
PORT=3000
API_URL=http://localhost:3001
CDN_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/timp
REDIS_URL=redis://localhost:6379

# AWS
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
S3_BUCKET=timp-assets
S3_VIDEO_BUCKET=timp-videos

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=

# SMS
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# Zoom
ZOOM_API_KEY=
ZOOM_API_SECRET=

# AI
OPENAI_API_KEY=

# Monitoring
SENTRY_DSN=
```

---

## 11. Docker Configuration

### Docker Compose (Development)

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: timp
      POSTGRES_USER: timp
      POSTGRES_PASSWORD: timp
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  api-gateway:
    build:
      context: ./services/api-gateway
      dockerfile: Dockerfile
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://timp:timp@postgres:5432/timp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis

  super-admin-panel:
    build:
      context: ./apps/super-admin-panel
      dockerfile: Dockerfile
    ports:
      - "3002:3000"
    environment:
      - NODE_ENV=development
      - API_URL=http://localhost:3001

  admin-panel:
    build:
      context: ./apps/admin-panel
      dockerfile: Dockerfile
    ports:
      - "3003:3000"
    environment:
      - NODE_ENV=development
      - API_URL=http://localhost:3001

  trainer-panel:
    build:
      context: ./apps/trainer-panel
      dockerfile: Dockerfile
    ports:
      - "3004:3000"
    environment:
      - NODE_ENV=development
      - API_URL=http://localhost:3001

  student-panel:
    build:
      context: ./apps/student-panel
      dockerfile: Dockerfile
    ports:
      - "3005:3000"
    environment:
      - NODE_ENV=development
      - API_URL=http://localhost:3001

volumes:
  postgres_data:
  redis_data:
```

---

## 12. Package.json Scripts

### Root package.json

```json
{
  "name": "training-institute-platform",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*",
    "services/*"
  ],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "clean": "turbo run clean",
    "format": "prettier --write \"**/*.{ts,tsx,md}\"",
    "db:migrate": "cd services/api-gateway && npm run db:migrate",
    "db:seed": "cd services/api-gateway && npm run db:seed",
    "docker:up": "docker-compose up -d",
    "docker:down": "docker-compose down",
    "docker:build": "docker-compose build",
    "deploy:staging": "cd infrastructure/terraform && terraform apply -auto-approve -var-file=environments/staging/terraform.tfvars",
    "deploy:production": "cd infrastructure/terraform && terraform apply -auto-approve -var-file=environments/production/terraform.tfvars"
  },
  "devDependencies": {
    "turbo": "^1.10.0",
    "prettier": "^3.0.0",
    "eslint": "^8.50.0",
    "typescript": "^5.2.0"
  }
}
```

---

## 13. Summary

This folder structure provides:

- **Monorepo Architecture:** All code in one repository
- **Microservices:** Separate backend services
- **Shared Packages:** Reusable components and utilities
- **Clear Separation:** Frontend, backend, infrastructure
- **Scalability:** Easy to add new services
- **Maintainability:** Organized and documented
- **Development:** Docker Compose for local development
- **Deployment:** Terraform/CDK for infrastructure
- **Testing:** Comprehensive test structure
- **Documentation:** Complete documentation

The structure follows industry best practices and is optimized for:
- Team collaboration
- Code reusability
- Scalability
- Maintainability
- Deployment automation

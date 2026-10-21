Continue building the **same barbershop booking application described in the previous prompt**.

This is NOT a new project and NOT a separate visual concept.

The new interface should be the **private management dashboard for the barbershop owner/staff**, while keeping the exact same visual identity, typography, spacing, colors, components, interaction patterns and premium aesthetic established in the previous booking experience.

The customer booking page and this dashboard should feel like **two parts of the same product**.

The dashboard should be modern, highly usable, clean and professional.

---

# MAIN PURPOSE

Create a complete management dashboard where the barbershop owner can manage:

* Appointments
* Barbers
* Services
* Products
* Schedule / availability
* Application settings
* Basic business overview

The dashboard should prioritize **real operational use**, not just visual presentation.

It should feel like a real SaaS product that a barbershop owner could use every day.

---

# GLOBAL LAYOUT

Use a modern application dashboard layout.

Desktop:

┌──────────────────────────────────────────────────────────┐
│ Logo / Brand                                  User       │
├───────────────┬──────────────────────────────────────────┤
│               │                                          │
│ Dashboard     │                                          │
│ Agendamentos  │                                          │
│ Calendário    │              Main Content                │
│ Barbeiros     │                                          │
│ Serviços      │                                          │
│ Produtos      │                                          │
│ Configurações │                                          │
│               │                                          │
└───────────────┴──────────────────────────────────────────┘

Use a sidebar navigation on desktop.

On mobile, transform the navigation into a responsive menu / bottom navigation where appropriate.

The sidebar should remain minimal and elegant.

Do not make it look like a generic enterprise administration template.

---

# 1. DASHBOARD / OVERVIEW

The main dashboard should provide an immediate overview of the business.

At the top:

“Bom dia, Lucas”

“Veja o que está acontecendo na sua barbearia hoje.”

Include summary cards such as:

* Agendamentos hoje
* Confirmados
* Pendentes
* Receita estimada
* Clientes atendidos

Example:

12
Agendamentos hoje

9
Confirmados

3
Pendentes

R$ 845
Receita estimada

Keep these cards visually consistent with the booking interface.

Do not overload the dashboard with unnecessary statistics.

---

# 2. TODAY'S SCHEDULE

One of the most important sections should be the **schedule for today**.

Create a timeline / calendar inspired by **Google Calendar**, but with the same visual language of the barbershop application.

Example:

HOJE — 25 SETEMBRO

08:00 ─────────────────────────────

09:00
┌─────────────────────────────┐
│ 09:00 — João                │
│ Corte Masculino             │
│ Lucas • Confirmado          │
└─────────────────────────────┘

10:00
┌─────────────────────────────┐
│ 10:30 — Pedro               │
│ Corte + Barba               │
│ Rafael • Pendente            │
└─────────────────────────────┘

11:00 ─────────────────────────────

12:00

13:00
...

The calendar should visually represent:

* Time
* Customer
* Service
* Barber
* Appointment status
* Duration

Appointments should occupy the appropriate amount of vertical space according to their duration.

For example:

30-minute appointment = smaller block

60-minute appointment = larger block

This should resemble a professional scheduling calendar rather than a simple list.

---

# 3. CALENDAR / APPOINTMENTS

Create a dedicated “Agendamentos” section.

Allow the owner to switch between:

* Day
* Week
* Month

The **Day view** should be the most detailed.

The **Week view** should show barbers and appointments across multiple days.

The **Month view** should provide a quick overview of appointment volume.

Include navigation:

← Previous

Today

Next →

Also include a date picker.

---

# APPOINTMENT STATUS

Every appointment should have a clear status.

Possible statuses:

* Confirmado
* Pendente
* Cancelado
* Concluído
* No-show

Use subtle visual differences rather than extremely bright colors.

The status should be immediately recognizable.

---

# APPOINTMENT DETAILS

Clicking an appointment should open a detail panel or modal.

Example:

CLIENTE

João Silva

+55 11 99999-9999

[joao@email.com](mailto:joao@email.com)

---

SERVIÇO

Corte + Barba

70 min

R$ 70

---

BARBEIRO

Lucas

---

DATA

25 de setembro

14:30

---

STATUS

Confirmado

Actions:

“Confirmar”

“Reagendar”

“Editar”

“Cancelar”

“Marcar como concluído”

The owner should be able to modify the appointment without leaving the calendar.

---

# 4. CREATE APPOINTMENT MANUALLY

The owner must be able to create appointments manually.

Add a prominent button:

“+ Novo agendamento”

This should open a booking form similar to the customer booking experience, but optimized for staff.

Fields:

Customer

* Existing customer
* New customer

Service

Barber

Date

Time

Notes

Status

Allow the owner to create an appointment even if it was received through WhatsApp, phone, Instagram, walk-in, etc.

Example:

“Origem do agendamento”

* Site
* WhatsApp
* Telefone
* Presencial
* Manual

The interface should make this process extremely fast.

---

# 5. BARBERS

Create a dedicated “Barbeiros” management section.

Display barbers in a clean grid or table.

Each barber should have:

* Photo/avatar
* Name
* Specialty
* Status
* Working hours
* Number of appointments today
* Actions

Example:

Lucas Santos
Especialista em degradê

Hoje:
6 agendamentos

Disponível

[Editar] [Horários] [...]

---

# BARBER MANAGEMENT

The owner must be able to:

* Add a barber
* Edit a barber
* Delete a barber
* Activate/deactivate a barber
* View assigned schedule
* Define working days
* Define working hours
* Define breaks
* Define days off
* View appointments assigned to the barber

Button:

“+ Adicionar barbeiro”

Form:

Nome

Telefone

Email

Foto

Especialidades

Status

---

# BARBER SCHEDULE

Each barber should have their own availability configuration.

Example:

Lucas Santos

SEGUNDA
09:00 — 19:00

TERÇA
09:00 — 19:00

QUARTA
09:00 — 19:00

QUINTA
09:00 — 19:00

SEXTA
09:00 — 20:00

SÁBADO
09:00 — 17:00

DOMINGO
Folga

Allow the owner to define:

Start time

End time

Breaks

Days off

Special dates

Vacation / absence

The system should visually show when a barber is available or unavailable.

---

# 6. SERVICES

Create a dedicated “Serviços” section.

The owner must be able to:

* Add services
* Edit services
* Delete services
* Activate/deactivate services
* Change price
* Change duration
* Define which barbers can perform the service

Display services in clean cards or a table.

Example:

Corte Masculino

45 min

R$ 45

Ativo

[Editar] [...]

---

Corte + Barba

70 min

R$ 70

Ativo

[Editar] [...]

---

Barba

30 min

R$ 35

Ativo

[Editar] [...]

Add button:

“+ Novo serviço”

Service form:

Nome

Descrição

Preço

Duração

Barbeiros habilitados

Status

---

# 7. PRODUCTS

Create a “Produtos” section.

This can be used to manage products sold by the barbershop.

Example:

Pomada Modeladora

R$ 35

Estoque: 14

Ativo

Shampoo

R$ 28

Estoque: 8

Ativo

Allow:

* Add product
* Edit product
* Delete product
* Change price
* Manage stock
* Activate/deactivate product

Product fields:

Nome

Descrição

Preço

Estoque

Categoria

Imagem

Status

Keep this section simple. It should not become a complete e-commerce system.

---

# 8. SETTINGS

Create a clean settings area.

Sections:

### Business

* Barbershop name
* Logo
* Phone
* Email
* Address
* Opening hours

### Booking

* Enable/disable online booking
* Minimum advance booking time
* Maximum advance booking period
* Cancellation policy
* Appointment duration rules
* Allow customers to choose a barber
* Allow “Any barber”

### Notifications

* Email confirmations
* Appointment reminders
* Cancellation notifications
* Staff notifications

### Appearance

* Logo
* Accent color
* Booking page customization

### Account

* Owner profile
* Password
* Staff accounts
* Logout

---

# 9. APPOINTMENT FILTERS

The appointment section should have useful filters.

For example:

Date

Barber

Service

Status

Customer

Origin

Example:

[Today] [All barbers] [All services] [All statuses]

The filters should update the calendar/list dynamically.

---

# 10. SEARCH

Include global or contextual search.

The owner should be able to search:

* Customer
* Phone
* Appointment
* Barber
* Service

Example:

“Buscar cliente, teléfono ou agendamento...”

Search should feel fast and modern.

---

# 11. RESPONSIVE DESIGN

The dashboard must work beautifully on:

* Desktop
* Laptop
* Tablet
* Mobile

Desktop should prioritize the calendar and operational workflow.

Mobile should transform the calendar into a practical agenda/list when a traditional calendar becomes too cramped.

Do not simply shrink the desktop UI.

Adapt the experience specifically for mobile.

---

# 12. DESIGN LANGUAGE

IMPORTANT:

Maintain the exact design language established in the previous booking interface.

The dashboard should use:

* Same typography
* Same primary accent
* Same border radius philosophy
* Same buttons
* Same input styles
* Same icons
* Same spacing system
* Same visual hierarchy
* Same interaction patterns

The customer booking page and dashboard should clearly belong to the same product.

However, the dashboard should feel slightly more information-dense because it is an operational interface.

---

# 13. ORIGINALITY

Do not create a generic admin dashboard.

Avoid:

* Generic Bootstrap dashboards
* Excessive cards
* Excessive gradients
* Huge charts
* Unnecessary animations
* Excessive glassmorphism
* Corporate enterprise aesthetics

The visual identity should feel like:

**Premium barbershop + modern SaaS + excellent scheduling UX**

The interface should be visually distinctive while remaining practical.

---

# 14. MICRO-INTERACTIONS

Add subtle interactions:

* Smooth sidebar transitions
* Hover states
* Appointment hover previews
* Selected calendar states
* Modal transitions
* Toast notifications
* Loading states
* Empty states
* Confirmation dialogs

Examples:

“Agendamento criado com sucesso.”

“Barbeiro atualizado.”

“Serviço excluído.”

When deleting something, require confirmation.

Example:

“Excluir este barbeiro?”

“Essa ação não poderá ser desfeita.”

[Cancelar] [Excluir]

---

# 15. EMPTY STATES

Design useful empty states.

Example:

“No hay agendamentos para este día.”

“Não existem horários agendados para hoje.”

[+ Novo agendamento]

For services:

“Você ainda não cadastrou nenhum serviço.”

[+ Adicionar serviço]

For barbers:

“Nenhum barbeiro cadastrado.”

[+ Adicionar barbeiro]

Do not leave empty white spaces.

---

# 16. DATA RELATIONSHIPS

The UI should visually communicate the relationships between the entities:

Customer
↓
Appointment
↓
Service
↓
Barber
↓
Schedule

For example, when creating an appointment:

Selecting a service should determine the duration.

Selecting a date should determine available barbers.

Selecting a barber should determine available times.

The same logic established in the customer booking flow should be reflected in the administrative dashboard.

---

# 17. IMPORTANT

This dashboard is a **continuation of the exact same application from the previous prompt**.

Do not redesign the booking interface.

Do not create a new brand.

Do not create a new visual identity.

Reuse and extend the existing design system.

The final product should feel like:

**Customer Booking Experience**
+
**Professional Barbershop Management Dashboard**

Both should look and feel like one cohesive application.

Build the interface as if it were going to be implemented with **React / Next.js**, using reusable components and a clean, scalable design system.

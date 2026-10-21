Create a **modern, premium, original appointment-booking interface for a barbershop**.

This is **NOT the landing page** of the barbershop. It is a **dedicated booking page/app** that the customer reaches after clicking an “Agendar horário” / “Book appointment” button.

The main goal is to make scheduling a haircut feel **simple, fast, elegant, and intuitive**, especially on mobile.

Use this website as a **functional UX reference only**:
https://n1354111.alteg.io/company/1292989/create-record/record?o=m2821535s12708812d2626090900

Do NOT copy its visual design. Create a much more modern and original interface.

## CORE BOOKING FLOW

The booking process should follow these steps:

1. Customer information
2. Service selection
3. Date selection
4. Barber selection
5. Time selection
6. Booking confirmation

The interface should make it obvious where the customer is in the process.

---

## 1. CUSTOMER INFORMATION

The first screen should ask for the customer's information.

Fields:

* Full name
* Phone number
* Email

Example:

“Vamos começar”
“Preencha seus dados para agendar seu horário.”

Inputs should be clean, modern and easy to use.

Include a primary button:

“Continuar”

The form should feel lightweight and not overwhelming.

---

## 2. SERVICE SELECTION

After entering their information, the customer chooses the service.

Create attractive service cards.

Example services:

* Corte Masculino — R$ 45
* Corte + Barba — R$ 70
* Barba — R$ 35
* Corte + Sobrancelha — R$ 55

Each service should display:

* Service name
* Short description
* Duration
* Price

Example:

“Corte Masculino”
“Corte tradicional ou degradê”
“45 min”
“R$ 45”

The selected service should have a clear visual state.

Primary CTA:

“Continuar”

---

## 3. DATE SELECTION

After selecting the service, show a modern calendar.

The calendar should clearly distinguish:

* Available dates
* Unavailable dates
* Current date
* Selected date

Avoid making the calendar look like a generic enterprise calendar.

Make it feel like a premium consumer booking experience.

For example, the interface could show:

“Escolha o melhor dia para você”

Then a horizontal date selector:

SEG 22
TER 23
QUA 24
QUI 25
SEX 26
SÁB 27

with the possibility of opening a complete calendar.

Only dates with available appointments should be selectable.

---

## 4. BARBER SELECTION

After choosing the date, display the barbers who have availability that day.

Create modern barber cards containing:

* Profile photo/avatar
* Barber name
* Specialty or short description
* Availability indicator

Example:

“Lucas”
“Especialista em degradê”
“Disponível”

“Rafael”
“Cortes clássicos e barba”
“Disponível”

The customer should also have the possibility of choosing:

“Qualquer profissional”

if they don't have a preference.

---

## 5. TIME SELECTION

Once the barber is selected, show the available appointment times.

Group times logically, for example:

MANHÃ

09:00
09:30
10:00
10:30
11:00

TARDE

13:00
13:30
14:00
14:30
15:00

NOITE

18:00
18:30
19:00
19:30

Unavailable times should be visually disabled.

Selected time should have a strong but elegant visual state.

---

## 6. BOOKING SUMMARY

Before confirming, show a clean summary of the appointment.

Example:

RESUMO DO AGENDAMENTO

Corte + Barba
70 min
R$ 70

Quinta-feira, 25 de setembro
14:30

Lucas
Barbeiro

Customer:
David Carreño
+55 11 99999-9999
[david@email.com](mailto:david@email.com)

Primary button:

“Confirmar agendamento”

Secondary option:

“Alterar horário”

---

## 7. SUCCESS STATE

After confirming, show a beautiful confirmation screen.

Example:

✓
“Agendamento confirmado!”

“Seu horário foi reservado com sucesso.”

Then display:

Corte + Barba
25 de setembro
14:30
Lucas

Include actions:

“Adicionar ao calendário”

“Ver meu agendamento”

and optionally:

“Voltar para a barbearia”

The confirmation screen should feel polished and reassuring.

---

# DESIGN DIRECTION

The UI should feel like a **premium modern barbershop booking product**, not an old-fashioned scheduling system.

Visual references can include modern SaaS products, premium fintech apps, Apple-like interfaces, modern hospitality booking platforms, and contemporary barbershop brands.

However, create an ORIGINAL visual identity.

Avoid generic templates.

Avoid excessive gradients.

Avoid excessive glassmorphism.

Avoid making every element a rounded card.

Use hierarchy, spacing, typography and subtle interactions to create a sophisticated interface.

---

# LAYOUT

Desktop:

Use a centered booking application with a comfortable maximum width.

Possible structure:

---

## Brand / Back

Progress
① Dados  → ② Serviço → ③ Data → ④ Horário → ⑤ Confirmar

---

Main booking content

[ Current step ]

Large heading
Short explanation

Interactive content

---

## Back                         Continue

Mobile:

The interface must be designed mobile-first.

Use almost the entire screen width.

Keep the primary action easily reachable.

The booking experience should feel similar to a high-quality mobile app.

---

# PROGRESS INDICATOR

Create a clear but subtle progress indicator.

Example:

1 Dados
2 Serviço
3 Data
4 Horário
5 Confirmar

The current step should be visually emphasized.

Completed steps should show a checkmark.

The customer should always understand how far they are from completing the booking.

---

# HEADER

The booking page should have a very minimal header.

For example:

← Voltar

[Barbershop Logo]

or:

← Voltar para a barbearia

Do not create a large marketing header.

Remember: this is a **booking application**, not a landing page.

---

# INTERACTIONS

Design the UI as if it were a real application.

Include realistic states for:

* Default
* Hover
* Selected
* Disabled
* Loading
* Error
* Success

For example:

If there are no available times:

“Não encontramos horários disponíveis para este dia.”

Then provide:

“Escolher outro dia”

---

# IMPORTANT UX RULE

The available options must depend on previous selections.

Conceptually:

Customer
↓
Service
↓
Date
↓
Available barbers
↓
Available times
↓
Confirmation

For example:

If the customer selects:

“Corte + Barba”

and then:

“25 de setembro”

the interface should only display barbers who can perform that service and have availability on that date.

After selecting the barber, only display that barber's available times.

The UI should visually communicate this dependency.

---

# VISUAL STYLE

Create something:

* Minimal
* Premium
* Modern
* Original
* Elegant
* Masculine without being stereotypical
* Highly usable
* Mobile-first
* Professional

Suggested visual characteristics:

* Strong typography
* Generous spacing
* Subtle borders
* Sophisticated neutral color palette
* One distinctive accent color
* High-quality barber photography where appropriate
* Subtle shadows
* Smooth transitions
* Clear selected states
* Excellent visual hierarchy

Do not make it look like an admin dashboard.

It should feel like a **consumer-facing premium booking experience**.

---

# BRAND CONCEPT

You may create a fictional barbershop brand for the UI.

Example:

“NOIR BARBER”

or invent a completely different original name.

The brand should feel modern and premium.

Do not spend too much space on branding because the booking process is the main focus.

---

# OUTPUT

Generate the actual UI/design of the booking application.

Show the most important booking screen(s), preferably demonstrating the complete flow or a representative multi-step interface.

Prioritize the **booking experience itself**, not the barbershop landing page.

The final result should look like a real product that could be implemented as a modern web application using React/Next.js.

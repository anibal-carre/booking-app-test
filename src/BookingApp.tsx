import { FormEvent, ReactNode, useMemo, useState } from "react";

type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
};

type Barber = {
  id: string;
  name: string;
  specialty: string;
  image?: string;
  services: string[];
};

const services: Service[] = [
  {
    id: "cut",
    name: "Corte Masculino",
    description: "Tradicional, tesoura ou degradê",
    duration: "45 min",
    price: 45,
  },
  {
    id: "combo",
    name: "Corte + Barba",
    description: "Experiência completa, do corte ao acabamento",
    duration: "70 min",
    price: 70,
  },
  {
    id: "beard",
    name: "Barba",
    description: "Desenho, toalha quente e hidratação",
    duration: "35 min",
    price: 35,
  },
  {
    id: "brow",
    name: "Corte + Sobrancelha",
    description: "Corte personalizado com acabamento",
    duration: "55 min",
    price: 55,
  },
];

const barbers: Barber[] = [
  {
    id: "any",
    name: "Qualquer profissional",
    specialty: "A primeira disponibilidade",
    services: ["cut", "combo", "beard", "brow"],
  },
  {
    id: "lucas",
    name: "Lucas Martins",
    specialty: "Especialista em degradê",
    image:
      "https://images.unsplash.com/photo-1627890458144-4c0c481bf4b8?crop=faces&fit=crop&w=240&h=240&q=85",
    services: ["cut", "combo", "brow"],
  },
  {
    id: "rafael",
    name: "Rafael Costa",
    specialty: "Cortes clássicos e barba",
    image:
      "https://images.unsplash.com/photo-1707068869917-6e5493b27932?crop=faces&fit=crop&w=240&h=240&q=85",
    services: ["cut", "combo", "beard"],
  },
  {
    id: "mateus",
    name: "Mateus Lima",
    specialty: "Visagismo e tesoura",
    image:
      "https://images.unsplash.com/photo-1754473397061-e18dc1091855?crop=faces&fit=crop&w=240&h=240&q=85",
    services: ["cut", "brow"],
  },
];

const dates = [
  { weekday: "SEG", day: "22", long: "segunda-feira, 22 de setembro", available: true },
  { weekday: "TER", day: "23", long: "terça-feira, 23 de setembro", available: false },
  { weekday: "QUA", day: "24", long: "quarta-feira, 24 de setembro", available: true },
  { weekday: "QUI", day: "25", long: "quinta-feira, 25 de setembro", available: true },
  { weekday: "SEX", day: "26", long: "sexta-feira, 26 de setembro", available: true },
  { weekday: "SÁB", day: "27", long: "sábado, 27 de setembro", available: true },
  { weekday: "DOM", day: "28", long: "domingo, 28 de setembro", available: false },
];

const timeGroups = [
  { label: "Manhã", times: ["09:00", "09:30", "10:00", "10:30", "11:00"] },
  { label: "Tarde", times: ["13:00", "13:30", "14:00", "14:30", "15:00"] },
  { label: "Noite", times: ["18:00", "18:30", "19:00", "19:30"] },
];

const disabledTimes = ["09:30", "11:00", "13:30", "18:30"];

const steps = ["Dados", "Serviço", "Data", "Profissional", "Horário", "Confirmar"];

function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const paths: Record<string, ReactNode> = {
    arrow: <path d="m15 18-6-6 6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    edit: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
      </>
    ),
    spark: <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z" />,
    plus: <path d="M12 5v14M5 12h14" />,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}

function Progress({ current }: { current: number }) {
  return (
    <div className="progress-wrap">
      <div className="progress-meta">
        <span>ETAPA {Math.min(current + 1, 6)} DE 6</span>
        <span>{Math.round(((current + 1) / 6) * 100)}%</span>
      </div>
      <div className="progress-track">
        <span style={{ width: `${((current + 1) / 6) * 100}%` }} />
      </div>
      <div className="desktop-steps">
        {steps.map((label, index) => (
          <button
            className={`${index === current ? "active" : ""} ${index < current ? "done" : ""}`}
            disabled={index > current}
            key={label}
            type="button"
          >
            <span>{index < current ? <Icon name="check" size={14} /> : index + 1}</span>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Field({
  icon,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
}: {
  icon: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder: string;
  error?: boolean;
}) {
  return (
    <label className={`field ${error ? "field-error" : ""}`}>
      <span>{label}</span>
      <div>
        <Icon name={icon} size={19} />
        <input
          autoComplete={type === "email" ? "email" : type === "tel" ? "tel" : "name"}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </div>
      {error && <small>Preencha este campo para continuar.</small>}
    </label>
  );
}

export default function App() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [serviceId, setServiceId] = useState("combo");
  const [dateIndex, setDateIndex] = useState(3);
  const [barberId, setBarberId] = useState("lucas");
  const [time, setTime] = useState("14:30");

  const service = services.find((item) => item.id === serviceId) || services[0];
  const barber = barbers.find((item) => item.id === barberId) || barbers[0];
  const filteredBarbers = useMemo(
    () => barbers.filter((item) => item.services.includes(serviceId)),
    [serviceId],
  );

  function next() {
    if (step === 0 && (!name.trim() || !phone.trim() || !email.trim())) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);
    setStep((value) => Math.min(value + 1, 6));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submitCustomer(event: FormEvent) {
    event.preventDefault();
    next();
  }

  function previous() {
    if (step === 0) return;
    setStep((value) => Math.max(value - 1, 0));
  }

  function reset() {
    setStep(0);
    setName("");
    setPhone("");
    setEmail("");
    setShowErrors(false);
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="back-link" onClick={previous} type="button">
          <Icon name="arrow" size={19} />
          <span>{step === 0 ? "Voltar para a barbearia" : "Voltar"}</span>
        </button>
        <div className="brand" aria-label="Lume Barbearia">
          <span className="brand-mark">L</span>
          <strong>LUME</strong>
          <small>BARBEARIA</small>
        </div>
        <span className="secure-label">AGENDAMENTO SEGURO</span>
      </header>

      {step < 6 ? (
        <>
          <Progress current={step} />
          <section className="booking-layout">
            <div className="content-panel">
              {step === 0 && (
                <form className="step-view" onSubmit={submitCustomer}>
                  <span className="eyebrow">OLÁ, SEJA BEM-VINDO</span>
                  <h1>Vamos começar.</h1>
                  <p className="intro">Preencha seus dados para reservar seu momento na Lume.</p>
                  <div className="form-grid">
                    <Field
                      error={showErrors && !name.trim()}
                      icon="user"
                      label="Nome completo"
                      onChange={setName}
                      placeholder="Como podemos te chamar?"
                      value={name}
                    />
                    <Field
                      error={showErrors && !phone.trim()}
                      icon="phone"
                      label="Telefone"
                      onChange={setPhone}
                      placeholder="(11) 99999-9999"
                      type="tel"
                      value={phone}
                    />
                    <Field
                      error={showErrors && !email.trim()}
                      icon="mail"
                      label="E-mail"
                      onChange={setEmail}
                      placeholder="voce@email.com"
                      type="email"
                      value={email}
                    />
                  </div>
                  <p className="privacy-note">
                    Seus dados são usados apenas para confirmar e gerenciar o agendamento.
                  </p>
                  <BottomActions onBack={previous} onNext={next} showBack={false} />
                </form>
              )}

              {step === 1 && (
                <div className="step-view">
                  <span className="eyebrow">ESCOLHA SEU SERVIÇO</span>
                  <h1>Como podemos cuidar de você?</h1>
                  <p className="intro">Selecione uma experiência para continuar.</p>
                  <div className="service-list">
                    {services.map((item) => (
                      <button
                        className={`service-row ${serviceId === item.id ? "selected" : ""}`}
                        key={item.id}
                        onClick={() => {
                          setServiceId(item.id);
                          if (!barber.services.includes(item.id)) setBarberId("any");
                        }}
                        type="button"
                      >
                        <span className="select-dot">
                          {serviceId === item.id && <span />}
                        </span>
                        <span className="service-copy">
                          <strong>{item.name}</strong>
                          <small>{item.description}</small>
                        </span>
                        <span className="service-meta">
                          <small>
                            <Icon name="clock" size={14} /> {item.duration}
                          </small>
                          <strong>R$ {item.price}</strong>
                        </span>
                      </button>
                    ))}
                  </div>
                  <BottomActions onBack={previous} onNext={next} />
                </div>
              )}

              {step === 2 && (
                <div className="step-view">
                  <span className="eyebrow">ESCOLHA A DATA</span>
                  <h1>Qual é o melhor dia para você?</h1>
                  <p className="intro">Mostramos apenas os dias com horários disponíveis.</p>
                  <div className="calendar-head">
                    <div>
                      <strong>Setembro</strong>
                      <span>2025</span>
                    </div>
                    <button type="button">
                      <Icon name="calendar" size={17} /> Ver calendário completo
                    </button>
                  </div>
                  <div className="date-strip">
                    {dates.map((date, index) => (
                      <button
                        className={dateIndex === index ? "selected" : ""}
                        disabled={!date.available}
                        key={date.day}
                        onClick={() => setDateIndex(index)}
                        type="button"
                      >
                        <span>{date.weekday}</span>
                        <strong>{date.day}</strong>
                        <small />
                      </button>
                    ))}
                  </div>
                  <div className="availability-note">
                    <span />
                    <p>
                      <strong>Boa escolha.</strong> Há 12 horários disponíveis neste dia.
                    </p>
                  </div>
                  <BottomActions onBack={previous} onNext={next} />
                </div>
              )}

              {step === 3 && (
                <div className="step-view">
                  <span className="eyebrow">ESCOLHA O PROFISSIONAL</span>
                  <h1>Com quem você quer agendar?</h1>
                  <p className="intro">
                    Todos abaixo atendem {service.name.toLowerCase()} nesta data.
                  </p>
                  <div className="barber-list">
                    {filteredBarbers.map((item) => (
                      <button
                        className={`barber-row ${barberId === item.id ? "selected" : ""}`}
                        key={item.id}
                        onClick={() => setBarberId(item.id)}
                        type="button"
                      >
                        {item.image ? (
                          <img alt={`Retrato de ${item.name}`} src={item.image} />
                        ) : (
                          <span className="any-avatar">
                            <Icon name="spark" size={23} />
                          </span>
                        )}
                        <span className="barber-copy">
                          <strong>{item.name}</strong>
                          <small>{item.specialty}</small>
                        </span>
                        <span className="available">
                          <i /> Disponível
                        </span>
                        <span className="select-dot">
                          {barberId === item.id && <span />}
                        </span>
                      </button>
                    ))}
                  </div>
                  <BottomActions onBack={previous} onNext={next} />
                </div>
              )}

              {step === 4 && (
                <div className="step-view">
                  <span className="eyebrow">ESCOLHA O HORÁRIO</span>
                  <h1>Quando fica melhor?</h1>
                  <p className="intro">
                    {dates[dateIndex].long} · {barber.name}
                  </p>
                  <div className="time-groups">
                    {timeGroups.map((group) => (
                      <div className="time-group" key={group.label}>
                        <div className="time-label">
                          <span>{group.label}</span>
                          <i />
                        </div>
                        <div className="time-grid">
                          {group.times.map((item) => (
                            <button
                              className={time === item ? "selected" : ""}
                              disabled={disabledTimes.includes(item)}
                              key={item}
                              onClick={() => setTime(item)}
                              type="button"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="timezone">Horários de Brasília (GMT−3)</p>
                  <BottomActions onBack={previous} onNext={next} />
                </div>
              )}

              {step === 5 && (
                <div className="step-view">
                  <span className="eyebrow">QUASE TUDO PRONTO</span>
                  <h1>Revise seu agendamento.</h1>
                  <p className="intro">Confira os detalhes antes de confirmar.</p>
                  <div className="summary">
                    <SummarySection
                      icon="spark"
                      onEdit={() => setStep(1)}
                      title="Serviço"
                    >
                      <strong>{service.name}</strong>
                      <span>{service.duration} · R$ {service.price}</span>
                    </SummarySection>
                    <SummarySection icon="calendar" onEdit={() => setStep(2)} title="Data e hora">
                      <strong className="capitalize">{dates[dateIndex].long}</strong>
                      <span>{time}</span>
                    </SummarySection>
                    <SummarySection icon="user" onEdit={() => setStep(3)} title="Profissional">
                      <strong>{barber.name}</strong>
                      <span>{barber.specialty}</span>
                    </SummarySection>
                    <SummarySection icon="mail" onEdit={() => setStep(0)} title="Seus dados">
                      <strong>{name || "Seu nome"}</strong>
                      <span>{phone || "(11) 99999-9999"} · {email || "voce@email.com"}</span>
                    </SummarySection>
                  </div>
                  <BottomActions
                    label="Confirmar agendamento"
                    onBack={previous}
                    onNext={next}
                  />
                </div>
              )}
            </div>

            <aside className="context-panel">
              <div className="context-art">
                <span className="monogram">L</span>
                <div className="quote">
                  <Icon name="spark" size={20} />
                  <p>Seu tempo é precioso.<br />Seu ritual também.</p>
                </div>
              </div>
              <div className="context-details">
                <div>
                  <small>SEU AGENDAMENTO</small>
                  <strong>{service.name}</strong>
                </div>
                <div className="context-line">
                  <Icon name="clock" size={17} />
                  <span>{service.duration}</span>
                  <b>R$ {service.price}</b>
                </div>
                {step >= 2 && (
                  <div className="context-line">
                    <Icon name="calendar" size={17} />
                    <span>{dates[dateIndex].day} de setembro</span>
                  </div>
                )}
                {step >= 3 && (
                  <div className="context-line">
                    <Icon name="user" size={17} />
                    <span>{barber.name}</span>
                  </div>
                )}
              </div>
            </aside>
          </section>
        </>
      ) : (
        <section className="success-screen">
          <div className="success-mark">
            <Icon name="check" size={34} />
          </div>
          <span className="eyebrow">AGENDAMENTO CONFIRMADO</span>
          <h1>Seu horário está reservado.</h1>
          <p>Pronto, {name.split(" ")[0] || "você"}. Agora é só chegar e deixar o resto com a gente.</p>
          <div className="success-ticket">
            <div className="ticket-brand">
              <span className="brand-mark">L</span>
              <div><strong>LUME</strong><small>BARBEARIA</small></div>
            </div>
            <div className="ticket-date">
              <span>SET</span>
              <strong>{dates[dateIndex].day}</strong>
            </div>
            <div className="ticket-info">
              <strong>{service.name}</strong>
              <span>{time} · {barber.name}</span>
              <small>Rua das Palmeiras, 184 · Jardins</small>
            </div>
          </div>
          <div className="success-actions">
            <button className="primary-button" type="button">
              <Icon name="plus" size={19} /> Adicionar ao calendário
            </button>
            <button className="secondary-button" type="button">Ver meu agendamento</button>
          </div>
          <button className="text-button" onClick={reset} type="button">Voltar para a barbearia</button>
        </section>
      )}
    </main>
  );
}

function BottomActions({
  onBack,
  onNext,
  showBack = true,
  label = "Continuar",
}: {
  onBack: () => void;
  onNext: () => void;
  showBack?: boolean;
  label?: string;
}) {
  return (
    <div className={`bottom-actions ${!showBack ? "single" : ""}`}>
      {showBack && (
        <button className="secondary-button" onClick={onBack} type="button">
          <Icon name="arrow" size={18} /> Voltar
        </button>
      )}
      <button className="primary-button" onClick={onNext} type="button">
        {label} <span>→</span>
      </button>
    </div>
  );
}

function SummarySection({
  icon,
  title,
  children,
  onEdit,
}: {
  icon: string;
  title: string;
  children: ReactNode;
  onEdit: () => void;
}) {
  return (
    <div className="summary-row">
      <span className="summary-icon"><Icon name={icon} size={19} /></span>
      <div>
        <small>{title}</small>
        {children}
      </div>
      <button aria-label={`Alterar ${title}`} onClick={onEdit} type="button">
        <Icon name="edit" size={17} />
      </button>
    </div>
  );
}

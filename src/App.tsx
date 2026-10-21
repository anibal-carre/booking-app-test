import { useEffect, useState } from "react";
import BookingApp from "./BookingApp";

type IconName =
  | "grid"
  | "calendar"
  | "users"
  | "scissors"
  | "box"
  | "settings"
  | "search"
  | "bell"
  | "plus"
  | "chevron"
  | "more"
  | "clock"
  | "trend"
  | "check"
  | "close"
  | "menu"
  | "external"
  | "edit"
  | "trash";

function Icon({ name, size = 19 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    scissors: <><circle cx="6" cy="7" r="3" /><circle cx="6" cy="17" r="3" /><path d="m8.7 8.3 12.3 6.2M8.7 15.7 21 9.5" /></>,
    box: <><path d="m21 8-9 5-9-5 9-5Z" /><path d="m3 8 9 5 9-5v9l-9 5-9-5Z" /><path d="M12 13v9" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.09A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.15.37.36.7.64.98.29.28.68.43 1.08.42H21v4h-.09A1.7 1.7 0 0 0 19.4 15Z" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    more: <><circle cx="5" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    trend: <path d="m3 17 6-6 4 4 8-9M16 6h5v5" />,
    check: <path d="m5 12 4 4L19 6" />,
    close: <path d="M18 6 6 18M6 6l12 12" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    external: <><path d="M15 3h6v6M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></>,
    trash: <><path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 11v5M14 11v5" /></>,
  };
  return <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">{paths[name]}</svg>;
}

const navItems: { id: Page; label: string; icon: IconName }[] = [
  { id: "overview", label: "Visão geral", icon: "grid" },
  { id: "appointments", label: "Agendamentos", icon: "calendar" },
  { id: "barbers", label: "Barbeiros", icon: "users" },
  { id: "services", label: "Serviços", icon: "scissors" },
  { id: "products", label: "Produtos", icon: "box" },
  { id: "settings", label: "Configurações", icon: "settings" },
];

type Page = "overview" | "appointments" | "barbers" | "services" | "products" | "settings" | "profile" | "barberProfile";
type AppMode = "dashboard" | "adminLogin" | "barberLogin" | "barberArea" | "notFound";

function modeFromHash(): AppMode {
  const route = window.location.hash;
  if (!route) return "dashboard";
  if (route === "#admin-login") return "adminLogin";
  if (route === "#barber-login") return "barberLogin";
  if (route === "#barber-area") return "barberArea";
  if (route === "#404" || route === "#not-found") return "notFound";
  return "notFound";
}
type Appointment = {
  id: number;
  time: string;
  customer: string;
  service: string;
  barber: string;
  duration: number;
  price: number;
  status: "Confirmado" | "Pendente" | "Cancelado" | "Concluído" | "No-show";
  column: number;
};

const initialAppointments: Appointment[] = [
  { id: 1, time: "09:00", customer: "João Silva", service: "Corte Masculino", barber: "Lucas", duration: 45, price: 45, status: "Confirmado", column: 0 },
  { id: 2, time: "09:30", customer: "André Rocha", service: "Barba", barber: "Rafael", duration: 35, price: 35, status: "Concluído", column: 1 },
  { id: 3, time: "10:30", customer: "Pedro Mota", service: "Corte + Barba", barber: "Rafael", duration: 70, price: 70, status: "Pendente", column: 1 },
  { id: 4, time: "11:00", customer: "Caio Mendes", service: "Corte Masculino", barber: "Mateus", duration: 45, price: 45, status: "Confirmado", column: 2 },
  { id: 5, time: "13:00", customer: "Diego Alves", service: "Corte + Sobrancelha", barber: "Lucas", duration: 55, price: 55, status: "Confirmado", column: 0 },
  { id: 6, time: "14:30", customer: "Bruno Lima", service: "Corte + Barba", barber: "Mateus", duration: 70, price: 70, status: "Confirmado", column: 2 },
  { id: 7, time: "16:00", customer: "Felipe Dias", service: "Barba", barber: "Rafael", duration: 35, price: 35, status: "Pendente", column: 1 },
];

const barberPhotos = [
  "https://images.unsplash.com/photo-1627890458144-4c0c481bf4b8?crop=faces&fit=crop&w=160&h=160&q=85",
  "https://images.unsplash.com/photo-1707068869917-6e5493b27932?crop=faces&fit=crop&w=160&h=160&q=85",
  "https://images.unsplash.com/photo-1754473397061-e18dc1091855?crop=faces&fit=crop&w=160&h=160&q=85",
];

export default function App() {
  const [page, setPage] = useState<Page>("overview");
  const [mode, setMode] = useState<AppMode>(modeFromHash);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [bookingPreview, setBookingPreview] = useState(false);
  const [selected, setSelected] = useState<Appointment | null>(null);
  const [newAppointment, setNewAppointment] = useState(false);
  const [toast, setToast] = useState("");
  const [appointments, setAppointments] = useState(initialAppointments);
  const [search, setSearch] = useState("");

  const searchResults = search.trim().length > 1
    ? appointments.filter((item) =>
        [item.customer, item.service, item.barber, item.time].some((value) =>
          value.toLocaleLowerCase("pt-BR").includes(search.toLocaleLowerCase("pt-BR")),
        ),
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const syncRoute = () => setMode(modeFromHash());
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  function navigate(nextMode: AppMode) {
    setMode(nextMode);
    window.location.hash = nextMode === "dashboard" ? "" : nextMode.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  }

  if (mode === "adminLogin") return <LoginPage onBack={() => navigate("dashboard")} onLogin={() => navigate("dashboard")} type="admin" />;
  if (mode === "barberLogin") return <LoginPage onBack={() => navigate("dashboard")} onLogin={() => navigate("barberArea")} type="barber" />;
  if (mode === "barberArea") return <BarberArea onLogout={() => navigate("barberLogin")} onProfile={() => { navigate("dashboard"); setPage("barberProfile"); }} />;
  if (mode === "notFound") return <NotFound onHome={() => navigate("dashboard")} />;

  if (bookingPreview) {
    return (
      <div>
        <button className="admin-return" onClick={() => setBookingPreview(false)} type="button">
          <Icon name="chevron" size={16} /> Voltar ao painel
        </button>
        <BookingApp />
      </div>
    );
  }

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  }

  function selectPage(value: Page) {
    setPage(value);
    setMobileMenu(false);
  }

  return (
    <div className="dashboard-shell">
      <aside className={`dash-sidebar ${mobileMenu ? "open" : ""}`}>
        <div className="dash-brand">
          <span>L</span>
          <div><strong>LUME</strong><small>GESTÃO</small></div>
          <button onClick={() => setMobileMenu(false)} type="button"><Icon name="close" /></button>
        </div>
        <nav>
          <small>MENU</small>
          {navItems.map((item) => (
            <button className={page === item.id ? "active" : ""} key={item.id} onClick={() => selectPage(item.id)} type="button">
              <Icon name={item.icon} /><span>{item.label}</span>
              {item.id === "appointments" && <b>12</b>}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button onClick={() => setBookingPreview(true)} type="button"><Icon name="external" /><span>Ver página de agendamento</span></button>
          <button onClick={() => navigate("barberLogin")} type="button"><Icon name="users" /><span>Acessar área do barbeiro</span></button>
          <div className="location-status"><i /><div><strong>Lume Jardins</strong><small>Agendamentos online</small></div></div>
        </div>
      </aside>
      {mobileMenu && <button aria-label="Fechar menu" className="sidebar-scrim" onClick={() => setMobileMenu(false)} type="button" />}

      <div className="dash-main">
        <header className="dash-header">
          <button className="mobile-menu" onClick={() => setMobileMenu(true)} type="button"><Icon name="menu" /></button>
          <div className="dash-search">
            <Icon name="search" size={18} />
            <input aria-label="Buscar agendamentos" onChange={(event) => setSearch(event.target.value)} placeholder="Buscar cliente, telefone ou agendamento..." value={search} />
            {search.length > 1 && (
              <div className="search-results">
                {searchResults.length ? searchResults.map((item) => (
                  <button key={item.id} onClick={() => { setSelected(item); setSearch(""); }} type="button">
                    <span><strong>{item.customer}</strong><small>{item.service} · {item.barber}</small></span>
                    <time>{item.time}</time>
                  </button>
                )) : <p>Nenhum agendamento encontrado.</p>}
              </div>
            )}
          </div>
          <div className="header-actions">
            <button className="notification" type="button"><Icon name="bell" /><i /></button>
            <span className="header-divider" />
            <button className="header-profile" onClick={() => setPage("profile")} type="button">
              <span className="user-avatar">LM</span>
              <span className="user-copy"><strong>Lucas Martins</strong><small>Administrador</small></span>
              <Icon name="chevron" size={14} />
            </button>
          </div>
        </header>

        <div className="dash-content">
          {page === "overview" && <Overview appointments={appointments} onNew={() => setNewAppointment(true)} onSelect={setSelected} />}
          {page === "appointments" && <Appointments appointments={appointments} onNew={() => setNewAppointment(true)} onSelect={setSelected} />}
          {page === "barbers" && <Barbers onProfile={() => setPage("barberProfile")} onToast={showToast} />}
          {page === "services" && <Services onToast={showToast} />}
          {page === "products" && <Products onToast={showToast} />}
          {page === "settings" && <Settings onToast={showToast} />}
          {page === "profile" && <AdminProfile onLogout={() => navigate("adminLogin")} onToast={showToast} />}
          {page === "barberProfile" && <BarberProfile onAppointments={() => setPage("appointments")} onBack={() => setPage("barbers")} onToast={showToast} />}
        </div>
      </div>

      {selected && <AppointmentDrawer appointment={selected} onClose={() => setSelected(null)} onToast={showToast} onUpdate={(status) => {
        setAppointments((current) => current.map((item) => item.id === selected.id ? { ...item, status } : item));
        setSelected((current) => current ? { ...current, status } : current);
      }} />}
      {newAppointment && <NewAppointment onClose={() => setNewAppointment(false)} onSave={(appointment) => {
        setAppointments((current) => [...current, { ...appointment, id: Math.max(...current.map((item) => item.id), 0) + 1 }]);
        setNewAppointment(false);
        showToast("Agendamento criado com sucesso.");
      }} />}
      {toast && <div className="dash-toast"><span><Icon name="check" size={16} /></span>{toast}</div>}
    </div>
  );
}

function PageHeading({ eyebrow, title, description, action, onAction }: { eyebrow: string; title: string; description: string; action?: string; onAction?: () => void }) {
  return <div className="page-heading"><div><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{action && <button className="dash-primary" onClick={onAction} type="button"><Icon name="plus" size={17} />{action}</button>}</div>;
}

function Overview({ appointments, onNew, onSelect }: { appointments: Appointment[]; onNew: () => void; onSelect: (value: Appointment) => void }) {
  const confirmed = appointments.filter((item) => item.status === "Confirmado").length;
  const pending = appointments.filter((item) => item.status === "Pendente").length;
  const revenue = appointments.filter((item) => item.status !== "Cancelado").reduce((total, item) => total + item.price, 0);
  return (
    <>
      <PageHeading action="Novo agendamento" description="Veja o que está acontecendo na sua barbearia hoje." eyebrow="QUINTA-FEIRA, 25 DE SETEMBRO" onAction={onNew} title="Bom dia, Lucas." />
      <div className="metric-strip">
        <Metric label="Agendamentos hoje" trend="+2 desde ontem" value={String(appointments.length)} />
        <Metric label="Confirmados" meta={`${Math.round((confirmed / Math.max(appointments.length, 1)) * 100)}% da agenda`} value={String(confirmed)} />
        <Metric accent label="Pendentes" meta="Requer atenção" value={String(pending)} />
        <Metric label="Receita estimada" trend="+12% esta semana" value={`R$ ${revenue}`} />
        <Metric label="Clientes atendidos" meta="Meta diária: 10" value={String(appointments.filter((item) => item.status === "Concluído").length)} />
      </div>
      <Schedule appointments={appointments.slice(0, 6)} onSelect={onSelect} />
    </>
  );
}

function Metric({ value, label, meta, trend, accent }: { value: string; label: string; meta?: string; trend?: string; accent?: boolean }) {
  return <div className={`dash-metric ${accent ? "attention" : ""}`}><span>{label}</span><strong>{value}</strong><small className={trend ? "positive" : ""}>{trend && <Icon name="trend" size={12} />}{meta || trend}</small></div>;
}

function Schedule({ appointments: items, onSelect, full = false }: { appointments: Appointment[]; onSelect: (value: Appointment) => void; full?: boolean }) {
  const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
  const names = ["Lucas", "Rafael", "Mateus"];
  const topFor = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return (h - 8) * 64 + (m / 60) * 64;
  };
  return (
    <section className="schedule-section">
      <div className="section-toolbar">
        <div><span>AGENDA DE HOJE</span><strong>12 agendamentos · 3 profissionais</strong></div>
        <div className="date-nav"><button type="button">‹</button><button className="today" type="button">Hoje</button><button type="button">›</button><button type="button"><Icon name="calendar" size={16} /> 25 set</button></div>
      </div>
      <div className="schedule-desktop">
        <div className="schedule-head"><span /><div>{names.map((name, index) => <div key={name}><img alt="" src={barberPhotos[index]} /><span><strong>{name}</strong><small>{index === 0 ? "6 horários" : "4 horários"}</small></span></div>)}</div></div>
        <div className="schedule-body" style={{ height: full ? 640 : 535 }}>
          <div className="time-axis">{hours.map((hour) => <span key={hour}>{hour}</span>)}</div>
          <div className="calendar-grid">
            {hours.map((hour) => <i key={hour} />)}
            {items.map((item) => <button className={`calendar-event ${item.status.toLowerCase()}`} key={item.id} onClick={() => onSelect(item)} style={{ height: Math.max(43, item.duration * 0.82), left: `calc(${item.column * 33.333}% + 6px)`, top: topFor(item.time), width: "calc(33.333% - 12px)" }} type="button"><b>{item.time}</b><strong>{item.customer}</strong><span>{item.service}</span><small><i />{item.status}</small></button>)}
            <div className="now-line" style={{ top: 236 }}><span>11:41</span></div>
          </div>
        </div>
      </div>
      <div className="schedule-mobile">
        {items.map((item) => <button key={item.id} onClick={() => onSelect(item)} type="button"><time>{item.time}</time><span className={`mobile-status ${item.status.toLowerCase()}`} /><div><strong>{item.customer}</strong><span>{item.service} · {item.barber}</span></div><Icon name="chevron" size={15} /></button>)}
      </div>
    </section>
  );
}

function Appointments({ appointments, onNew, onSelect }: { appointments: Appointment[]; onNew: () => void; onSelect: (value: Appointment) => void }) {
  const [view, setView] = useState("Dia");
  const [barber, setBarber] = useState("Todos");
  const [service, setService] = useState("Todos");
  const [status, setStatus] = useState("Todos");
  const filtered = appointments.filter((item) =>
    (barber === "Todos" || item.barber === barber) &&
    (service === "Todos" || item.service === service) &&
    (status === "Todos" || item.status === status),
  );
  return (
    <>
      <PageHeading action="Novo agendamento" description="Organize a agenda da equipe e acompanhe cada atendimento." eyebrow="OPERAÇÃO" onAction={onNew} title="Agendamentos" />
      <div className="filter-toolbar">
        <div className="view-switch">{["Dia", "Semana", "Mês"].map((item) => <button className={view === item ? "active" : ""} key={item} onClick={() => setView(item)} type="button">{item}</button>)}</div>
        <label className="filter-select"><span>Barbeiro</span><select onChange={(event) => setBarber(event.target.value)} value={barber}><option>Todos</option>{["Lucas", "Rafael", "Mateus"].map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="filter-select"><span>Serviço</span><select onChange={(event) => setService(event.target.value)} value={service}><option>Todos</option>{Array.from(new Set(appointments.map((item) => item.service))).map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="filter-select"><span>Status</span><select onChange={(event) => setStatus(event.target.value)} value={status}><option>Todos</option>{["Confirmado", "Pendente", "Cancelado", "Concluído", "No-show"].map((item) => <option key={item}>{item}</option>)}</select></label>
      </div>
      {view === "Dia" ? <Schedule appointments={filtered} full onSelect={onSelect} /> : <CalendarPlaceholder appointments={filtered} month={view === "Mês"} onSelect={onSelect} />}
    </>
  );
}

function CalendarPlaceholder({ appointments, month, onSelect }: { appointments: Appointment[]; month: boolean; onSelect: (value: Appointment) => void }) {
  if (!month) return <div className="week-view">{["SEG 22", "TER 23", "QUA 24", "QUI 25", "SEX 26", "SÁB 27"].map((day, i) => <div key={day}><strong>{day}</strong>{appointments.slice(i % 3, i % 3 + 2).map((a) => <button key={a.id} onClick={() => onSelect(a)} type="button"><small>{a.time}</small>{a.customer}<span>{a.barber}</span></button>)}</div>)}</div>;
  return <div className="month-view">{Array.from({ length: 35 }, (_, i) => <div className={i < 1 || i > 30 ? "muted" : ""} key={i}><span>{i === 0 ? 31 : i}</span>{i > 0 && i < 31 && i % 3 !== 0 && <small>{(i % 5) + 2} agend.</small>}</div>)}</div>;
}

function Barbers({ onToast, onProfile }: { onToast: (message: string) => void; onProfile: () => void }) {
  const data = [
    { name: "Lucas Martins", role: "Especialista em degradê", count: 6, hours: "09:00 — 19:00" },
    { name: "Rafael Costa", role: "Cortes clássicos e barba", count: 4, hours: "09:00 — 19:00" },
    { name: "Mateus Lima", role: "Visagismo e tesoura", count: 4, hours: "10:00 — 20:00" },
  ];
  return <><PageHeading action="Adicionar barbeiro" description="Gerencie sua equipe, horários e disponibilidade." eyebrow="EQUIPE" onAction={() => onToast("Novo perfil de barbeiro iniciado.")} title="Barbeiros" /><div className="barber-admin-grid">{data.map((item, i) => <article key={item.name}><div className="barber-admin-top"><img alt={`Foto de ${item.name}`} src={barberPhotos[i]} /><span className="active-pill"><i />Disponível</span><button type="button"><Icon name="more" /></button></div><h3>{item.name}</h3><p>{item.role}</p><div className="barber-admin-stats"><span><small>HOJE</small><strong>{item.count} agendamentos</strong></span><span><small>HORÁRIO</small><strong>{item.hours}</strong></span></div><div className="admin-card-actions"><button onClick={onProfile} type="button">Ver perfil</button><button onClick={() => onToast("Horários de trabalho abertos.")} type="button">Horários</button></div></article>)}</div></>;
}

function Services({ onToast }: { onToast: (message: string) => void }) {
  const data = [["Corte Masculino", "Tradicional, tesoura ou degradê", "45 min", "R$ 45"], ["Corte + Barba", "Experiência completa e acabamento", "70 min", "R$ 70"], ["Barba", "Desenho, toalha quente e hidratação", "35 min", "R$ 35"], ["Corte + Sobrancelha", "Corte personalizado com acabamento", "55 min", "R$ 55"]];
  return <><PageHeading action="Novo serviço" description="Defina preços, duração e profissionais habilitados." eyebrow="CATÁLOGO" onAction={() => onToast("Novo serviço iniciado.")} title="Serviços" /><ManagementTable headers={["Serviço", "Duração", "Preço", "Profissionais", "Status", ""]} rows={data.map((x, i) => [<div><strong>{x[0]}</strong><small>{x[1]}</small></div>, x[2], <strong>{x[3]}</strong>, `${i === 2 ? 2 : 3} barbeiros`, <span className="active-pill"><i />Ativo</span>, <button onClick={() => onToast("Serviço atualizado.")} type="button"><Icon name="more" /></button>])} /></>;
}

function Products({ onToast }: { onToast: (message: string) => void }) {
  const data = [["Pomada Modeladora", "Finalização", "14", "R$ 35"], ["Shampoo Fortalecedor", "Cuidado", "8", "R$ 28"], ["Óleo para Barba", "Cuidado", "5", "R$ 42"], ["Pente de Madeira", "Acessórios", "2", "R$ 18"]];
  return <><PageHeading action="Novo produto" description="Controle os produtos vendidos no balcão e o estoque." eyebrow="ESTOQUE" onAction={() => onToast("Novo produto iniciado.")} title="Produtos" /><ManagementTable headers={["Produto", "Categoria", "Estoque", "Preço", "Status", ""]} rows={data.map((x) => [<strong>{x[0]}</strong>, x[1], <span className={Number(x[2]) < 6 ? "stock-low" : ""}>{x[2]} unidades</span>, <strong>{x[3]}</strong>, <span className="active-pill"><i />Ativo</span>, <button onClick={() => onToast("Produto atualizado.")} type="button"><Icon name="more" /></button>])} /></>;
}

function ManagementTable({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  return <div className="management-table"><div className="table-row table-head">{headers.map((x) => <span key={x}>{x}</span>)}</div>{rows.map((row, i) => <div className="table-row" key={i}>{row.map((cell, j) => <span key={j}>{cell}</span>)}</div>)}</div>;
}

function Settings({ onToast }: { onToast: (message: string) => void }) {
  const [tab, setTab] = useState("Negócio");
  return <><PageHeading description="Configure sua barbearia e a experiência de agendamento." eyebrow="PREFERÊNCIAS" title="Configurações" /><div className="settings-layout"><nav>{["Negócio", "Agendamento", "Notificações", "Aparência", "Conta"].map((item) => <button className={tab === item ? "active" : ""} key={item} onClick={() => setTab(item)} type="button">{item}<Icon name="chevron" size={14} /></button>)}</nav><section><h2>{tab}</h2><p>Gerencie as preferências de {tab.toLowerCase()} da Lume Barbearia.</p>{tab === "Negócio" ? <div className="settings-form"><label><span>Nome da barbearia</span><input defaultValue="Lume Barbearia" /></label><div><label><span>Telefone</span><input defaultValue="(11) 3456-7890" /></label><label><span>E-mail</span><input defaultValue="contato@lume.com.br" /></label></div><label><span>Endereço</span><input defaultValue="Rua das Palmeiras, 184 · Jardins" /></label></div> : <div className="toggle-list">{["Ativar agendamento online", "Enviar confirmações por e-mail", "Permitir escolher o barbeiro", "Permitir qualquer profissional"].map((item, i) => <label key={item}><span><strong>{item}</strong><small>Essa opção pode ser alterada a qualquer momento.</small></span><input defaultChecked={i !== 1} type="checkbox" /></label>)}</div>}<button className="dash-primary" onClick={() => onToast("Configurações salvas.")} type="button">Salvar alterações</button></section></div></>;
}

function AppointmentDrawer({ appointment, onClose, onToast, onUpdate }: { appointment: Appointment; onClose: () => void; onToast: (message: string) => void; onUpdate: (status: Appointment["status"]) => void }) {
  const [confirmCancel, setConfirmCancel] = useState(false);
  const update = (status: Appointment["status"], message: string) => {
    onUpdate(status);
    onToast(message);
    onClose();
  };
  return <><button aria-label="Fechar detalhes" className="drawer-scrim" onClick={onClose} type="button" /><aside className="appointment-drawer"><header><div><span>DETALHES DO AGENDAMENTO</span><strong>#{String(appointment.id).padStart(4, "0")}</strong></div><button onClick={onClose} type="button"><Icon name="close" /></button></header><div className="drawer-client"><div>{appointment.customer.split(" ").map((x) => x[0]).join("")}</div><span><strong>{appointment.customer}</strong><small>Cliente desde março de 2024</small></span></div><div className="drawer-data"><Detail label="CONTATO"><strong>(11) 99998-4721</strong><span>cliente@email.com</span></Detail><Detail label="SERVIÇO"><strong>{appointment.service}</strong><span>{appointment.duration} min · R$ {appointment.price}</span></Detail><Detail label="PROFISSIONAL"><strong>{appointment.barber} Martins</strong><span>Barbeiro</span></Detail><Detail label="DATA E HORA"><strong>25 de setembro</strong><span>{appointment.time} — {appointment.duration} min</span></Detail><Detail label="STATUS"><span className={`detail-status ${appointment.status.toLowerCase()}`}><i />{appointment.status}</span></Detail></div><div className="drawer-actions"><button className="dash-primary" onClick={() => update("Concluído", "Agendamento marcado como concluído.")} type="button"><Icon name="check" size={17} />Marcar como concluído</button>{appointment.status === "Pendente" && <button className="confirm-button" onClick={() => update("Confirmado", "Agendamento confirmado.")} type="button">Confirmar agendamento</button>}<div><button type="button"><Icon name="edit" size={16} />Editar</button><button type="button"><Icon name="calendar" size={16} />Reagendar</button></div>{confirmCancel ? <div className="cancel-confirm"><p><strong>Cancelar este agendamento?</strong><span>Essa ação atualiza a agenda imediatamente.</span></p><button onClick={() => setConfirmCancel(false)} type="button">Voltar</button><button onClick={() => update("Cancelado", "Agendamento cancelado.")} type="button">Cancelar</button></div> : <button className="danger-text" onClick={() => setConfirmCancel(true)} type="button">Cancelar agendamento</button>}</div></aside></>;
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><small>{label}</small>{children}</div>;
}

function NewAppointment({ onClose, onSave }: { onClose: () => void; onSave: (appointment: Omit<Appointment, "id">) => void }) {
  const serviceDetails: Record<string, { duration: number; price: number }> = { "Corte + Barba": { duration: 70, price: 70 }, "Corte Masculino": { duration: 45, price: 45 }, Barba: { duration: 35, price: 35 } };
  return <div className="modal-wrap"><button className="modal-scrim" aria-label="Fechar" onClick={onClose} type="button" /><form className="new-modal" onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const service = String(data.get("service")); const barber = String(data.get("barber")); onSave({ customer: String(data.get("customer")), service, barber, time: String(data.get("time")), status: String(data.get("status")) as Appointment["status"], column: ["Lucas", "Rafael", "Mateus"].indexOf(barber), ...serviceDetails[service] }); }}><header><div><span>NOVO AGENDAMENTO</span><h2>Adicionar à agenda</h2></div><button onClick={onClose} type="button"><Icon name="close" /></button></header><div className="modal-form"><label><span>Cliente</span><input name="customer" placeholder="Buscar ou cadastrar cliente..." required /></label><div><label><span>Serviço</span><select defaultValue="Corte + Barba" name="service"><option>Corte + Barba</option><option>Corte Masculino</option><option>Barba</option></select></label><label><span>Profissional</span><select name="barber"><option>Lucas</option><option>Rafael</option><option>Mateus</option></select></label></div><div><label><span>Data</span><input defaultValue="2025-09-25" name="date" type="date" /></label><label><span>Horário</span><input defaultValue="14:30" name="time" type="time" /></label></div><div><label><span>Status</span><select defaultValue="Confirmado" name="status"><option>Confirmado</option><option>Pendente</option></select></label><label><span>Origem do agendamento</span><select name="origin"><option>WhatsApp</option><option>Telefone</option><option>Presencial</option><option>Site</option><option>Manual</option></select></label></div><label><span>Observações</span><textarea name="notes" placeholder="Preferências, recados ou observações..." /></label></div><footer><button className="dash-secondary" onClick={onClose} type="button">Cancelar</button><button className="dash-primary" type="submit">Criar agendamento</button></footer></form></div>;
}

function LoginPage({ type, onLogin, onBack }: { type: "admin" | "barber"; onLogin: () => void; onBack: () => void }) {
  const barber = type === "barber";
  return (
    <main className="login-page">
      <section className="login-visual">
        <div className="login-brand"><span>L</span><div><strong>LUME</strong><small>BARBEARIA</small></div></div>
        <div className="login-visual-copy"><span>GESTÃO COM PROPÓSITO</span><h1>Precisão em cada detalhe.</h1><p>Uma experiência de gestão criada para acompanhar o ritmo da sua barbearia.</p></div>
        <small className="photo-credit">Foto: Salah Regouane · Unsplash</small>
      </section>
      <section className="login-panel">
        <button className="login-back" onClick={onBack} type="button">‹ Voltar ao início</button>
        <form onSubmit={(event) => { event.preventDefault(); onLogin(); }}>
          <div className="login-heading"><span>{barber ? "ÁREA DO BARBEIRO" : "ACESSO ADMINISTRATIVO"}</span><h2>{barber ? "Sua agenda começa aqui." : "Bem-vindo de volta."}</h2><p>{barber ? "Entre para consultar seus horários e atendimentos." : "Acesse o painel de gestão da Lume Barbearia."}</p></div>
          <label><span>{barber ? "E-mail ou usuário" : "E-mail"}</span><input defaultValue={barber ? "rafael.costa" : "lucas@lumebarbearia.com.br"} required type={barber ? "text" : "email"} /></label>
          <label><span>Senha</span><input defaultValue="lume2025" required type="password" /></label>
          <div className="login-options"><label><input defaultChecked type="checkbox" />Lembrar de mim</label><button type="button">Esqueceu a senha?</button></div>
          <button className="login-submit" type="submit">Entrar <Icon name="chevron" size={16} /></button>
          <p className="login-help">Precisa de ajuda? <button type="button">Fale com o suporte</button></p>
        </form>
      </section>
    </main>
  );
}

function AdminProfile({ onLogout, onToast }: { onLogout: () => void; onToast: (message: string) => void }) {
  return (
    <>
      <PageHeading description="Gerencie suas informações pessoais e a segurança da conta." eyebrow="MINHA CONTA" title="Perfil do administrador" />
      <div className="profile-layout">
        <aside className="profile-summary">
          <div className="profile-avatar-large">LM</div><h2>Lucas Martins</h2><p>Proprietário · Administrador</p><span className="active-pill"><i />Conta ativa</span>
          <div className="profile-summary-meta"><span><small>UNIDADE</small><strong>Lume Jardins</strong></span><span><small>MEMBRO DESDE</small><strong>Março de 2023</strong></span></div>
          <button className="danger-text" onClick={onLogout} type="button">Sair da conta</button>
        </aside>
        <div className="profile-sections">
          <section><header><div><span>INFORMAÇÕES PESSOAIS</span><h3>Dados do perfil</h3></div><button className="dash-secondary" onClick={() => onToast("Modo de edição ativado.")} type="button"><Icon name="edit" size={15} />Editar perfil</button></header><div className="profile-data-grid"><Detail label="NOME COMPLETO"><strong>Lucas Martins</strong></Detail><Detail label="FUNÇÃO"><strong>Administrador</strong></Detail><Detail label="E-MAIL"><strong>lucas@lumebarbearia.com.br</strong></Detail><Detail label="TELEFONE"><strong>(11) 98765-4321</strong></Detail></div></section>
          <section><header><div><span>SEGURANÇA</span><h3>Senha e acesso</h3></div></header><div className="security-row"><span><strong>Senha da conta</strong><small>Última alteração há 4 meses</small></span><button className="dash-secondary" onClick={() => onToast("Link de alteração de senha enviado.")} type="button">Alterar senha</button></div><div className="security-row"><span><strong>Autenticação em duas etapas</strong><small>Adicione uma camada extra de segurança</small></span><span className="neutral-pill">Não configurada</span></div></section>
        </div>
      </div>
    </>
  );
}

function BarberProfile({ onBack, onAppointments, onToast }: { onBack: () => void; onAppointments: () => void; onToast: (message: string) => void }) {
  return (
    <>
      <button className="profile-back" onClick={onBack} type="button">‹ Voltar para barbeiros</button>
      <div className="barber-profile-hero">
        <img alt="Lucas Martins" src={barberPhotos[0]} />
        <div><span>PERFIL DO PROFISSIONAL</span><h1>Lucas Martins</h1><p>Especialista em degradê e cortes contemporâneos</p><span className="active-pill"><i />Disponível hoje</span></div>
        <div className="profile-actions"><button className="dash-secondary" onClick={() => onToast("Edição de perfil iniciada.")} type="button"><Icon name="edit" size={15} />Editar perfil</button><button className="dash-primary" onClick={() => onToast("Editor de horários aberto.")} type="button"><Icon name="calendar" size={15} />Editar horários</button></div>
      </div>
      <div className="barber-profile-grid">
        <div className="profile-sections">
          <section><header><div><span>CONTATO E CONTA</span><h3>Informações profissionais</h3></div></header><div className="profile-data-grid"><Detail label="E-MAIL"><strong>lucas@lumebarbearia.com.br</strong></Detail><Detail label="TELEFONE"><strong>(11) 99821-4520</strong></Detail><Detail label="FUNÇÃO"><strong>Barbeiro sênior</strong></Detail><Detail label="STATUS"><strong>Ativo</strong></Detail></div></section>
          <section><header><div><span>DISPONIBILIDADE</span><h3>Jornada semanal</h3></div></header><div className="workweek">{["SEG|09:00 — 19:00", "TER|09:00 — 19:00", "QUA|09:00 — 19:00", "QUI|09:00 — 19:00", "SEX|09:00 — 20:00", "SÁB|09:00 — 17:00", "DOM|Folga"].map((item) => { const [day, hours] = item.split("|"); return <div className={hours === "Folga" ? "off" : ""} key={day}><strong>{day}</strong><span>{hours}</span></div>; })}</div><p className="days-off">Próxima folga especial: <strong>30 de setembro</strong></p></section>
        </div>
        <section className="upcoming-card"><header><div><span>PRÓXIMOS ATENDIMENTOS</span><h3>Hoje · 6 agendamentos</h3></div><button onClick={onAppointments} type="button">Ver agenda</button></header>{initialAppointments.filter((item) => item.barber === "Lucas").map((item) => <button key={item.id} onClick={onAppointments} type="button"><time>{item.time}</time><span><strong>{item.customer}</strong><small>{item.service} · {item.duration} min</small></span><i className={item.status.toLowerCase()} /></button>)}</section>
      </div>
    </>
  );
}

function BarberArea({ onLogout, onProfile }: { onLogout: () => void; onProfile: () => void }) {
  const personalAppointments = initialAppointments.filter((item) => item.barber === "Lucas");
  return (
    <main className="barber-area">
      <header className="barber-area-header"><div className="login-brand dark"><span>L</span><div><strong>LUME</strong><small>ÁREA DO BARBEIRO</small></div></div><div><button onClick={onProfile} type="button"><span className="user-avatar">LM</span><span><strong>Lucas Martins</strong><small>Ver perfil</small></span></button><button onClick={onLogout} type="button">Sair</button></div></header>
      <div className="barber-area-content">
        <PageHeading description="Confira seus atendimentos e organize o seu dia." eyebrow="QUINTA-FEIRA, 25 DE SETEMBRO" title="Bom dia, Lucas." />
        <div className="barber-day-summary"><div><span>PRÓXIMO CLIENTE</span><strong>13:00 · Diego Alves</strong><small>Corte + Sobrancelha</small></div><div><span>JORNADA DE HOJE</span><strong>09:00 — 19:00</strong><small>Intervalo às 12:00</small></div><div><span>ATENDIMENTOS</span><strong>{personalAppointments.length} agendamentos</strong><small>1 concluído · 2 confirmados</small></div></div>
        <div className="personal-schedule-grid">
          <section className="personal-timeline"><header><div><span>MINHA AGENDA</span><h2>Atendimentos de hoje</h2></div><span className="active-pill"><i />Em expediente</span></header><div className="timeline-list">{["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map((hour) => { const item = personalAppointments.find((appointment) => appointment.time.startsWith(hour.slice(0, 2))); return <div className="timeline-hour" key={hour}><time>{hour}</time><span />{item && <article className={item.status.toLowerCase()}><div><strong>{item.time} — {item.customer}</strong><small>{item.service} · {item.duration} min</small></div><span>{item.status}</span></article>}</div>; })}</div></section>
          <aside className="barber-week"><span>ESTA SEMANA</span><h2>Sua jornada</h2>{["Segunda|09:00 — 19:00|4", "Terça|09:00 — 19:00|5", "Quarta|09:00 — 19:00|6", "Hoje|09:00 — 19:00|3", "Sexta|09:00 — 20:00|7", "Sábado|09:00 — 17:00|5", "Domingo|Folga|0"].map((row) => { const [day, hours, count] = row.split("|"); return <div className={day === "Hoje" ? "today" : hours === "Folga" ? "off" : ""} key={day}><span><strong>{day}</strong><small>{hours}</small></span>{count !== "0" && <b>{count}</b>}</div>; })}<p>Próxima folga especial<strong>30 de setembro</strong></p></aside>
        </div>
      </div>
    </main>
  );
}

function NotFound({ onHome }: { onHome: () => void }) {
  return <main className="not-found"><div className="login-brand dark"><span>L</span><div><strong>LUME</strong><small>BARBEARIA</small></div></div><section><span>404</span><h1>Página não encontrada</h1><p>Não conseguimos encontrar a página que você está procurando.</p><div><button className="dash-primary" onClick={onHome} type="button">Voltar ao início</button><button className="dash-secondary" onClick={() => window.history.back()} type="button">Voltar</button></div></section><small>Precisa de ajuda? contato@lumebarbearia.com.br</small></main>;
}

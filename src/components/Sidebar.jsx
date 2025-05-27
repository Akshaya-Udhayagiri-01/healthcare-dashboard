export default function Sidebar({ className = '' }) {
  return (
    <aside className={className}>
      <div className="sidebar-logo">Healthcare.</div>

      <h2>General</h2>
      <ul>
        <li>Dashboard</li>
        <li>History</li>
        <li>Calendar</li>
        <li>Appointments</li>
        <li>Statistics</li>
      </ul>
      <br />

      <h2>Tools</h2>
      <ul>
        <li>Tests</li>
        <li>Chat</li>
        <li>Support</li>
        <br /><br /><br /><br /><br /><br /><br />
        <li><h2>Settings</h2></li>
      </ul>
    </aside>
  );
}

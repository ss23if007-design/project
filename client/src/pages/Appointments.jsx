import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth.jsx";
import { Acc_sideNav } from "../component/Acc_sideNav";

export const Appointments = () => {
  const { token } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    let mounted = true;

    const load = async () => {
      if (!token) {
        setError("Not authenticated");
        return;
      }
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("http://localhost:5000/api/appointments", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          signal: controller.signal,
        });

        const body = await res.json().catch(() => null);
        if (!res.ok) {
          throw new Error(body?.message || `Fetch failed: ${res.status}`);
        }

        const list = Array.isArray(body) ? body : body?.appointments ?? [];
        if (mounted) setAppointments(list);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Fetch appointments error:", err);
          setError(err.message || "Could not load appointments");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
      controller.abort();
    };
  }, [token]);

  return (
    <div style={{ display: "flex", gap: 24 }}>
      <aside style={{ width: 240 }}>
        <Acc_sideNav />
      </aside>

      <main style={{ flex: 1 }}>
        <h1>Appointments</h1>

        {loading && <p>Loading…</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && appointments.length === 0 && <p>No appointments found.</p>}

        {!loading && appointments.length > 0 && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ddd" }}>Date</th>
                  <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ddd" }}>Services</th>
                  <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ddd" }}>Phone</th>
                  <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ddd" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a._id ?? `${a.date}-${a.phone}`}>
                    <td style={{ padding: 8, borderBottom: "1px solid #f3f3f3" }}>
                      {a.date ? new Date(a.date).toLocaleString() : "-"}
                    </td>
                    <td style={{ padding: 8, borderBottom: "1px solid #f3f3f3" }}>
                      {Array.isArray(a.services) ? a.services.join(", ") : String(a.services ?? "-")}
                    </td>
                    <td style={{ padding: 8, borderBottom: "1px solid #f3f3f3" }}>{a.phone ?? "-"}</td>
                    <td style={{ padding: 8, borderBottom: "1px solid #f3f3f3" }}>{a.status ?? "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default Appointments;

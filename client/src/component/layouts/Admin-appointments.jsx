import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../../store/auth.jsx";

export const AdminAppointments = () => {
  const { token } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancellingId, setCancellingId] = useState(null);

  const getAllAppointmentsData = useCallback(async () => {
    if (!token) {
      setError("Not authenticated");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:5000/api/admin/appointments", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || `Failed to fetch: ${res.status}`);
      }

      setAppointments(Array.isArray(data) ? data : data.appointments ?? []);
    } catch (err) {
      console.error("Error fetching appointments:", err);
      setError(err.message || "Error fetching appointments");
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  }, [token]);

  // Cancel appointment
  const cancelAppointment = async (id) => {
    if (!id) return;
    if (!confirm("Are you sure you want to cancel this appointment?")) return;

    setCancellingId(id);
    try {
      const res = await fetch(`http://localhost:5000/api/admin/appointments/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const body = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(body?.message || `Cancel failed: ${res.status}`);
      }

      // refresh list
      await getAllAppointmentsData();
    } catch (err) {
      console.error("Cancel appointment error:", err);
      alert(err.message || "Could not cancel appointment");
    } finally {
      setCancellingId(null);
    }
  };

  useEffect(() => {
    getAllAppointmentsData();
  }, [getAllAppointmentsData]);

  return (
    <>
      <h5 style={{ margin: 10}}>Admin — Appointments</h5>

      {loading && <p>Loading appointments…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && appointments.length === 0 && !error && <p>No appointments found.</p>}

      {!loading && appointments.length > 0 && (
        <div className="table-container">
          <table className="appointments-table" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #7b7979ff", color: "black"}}>Name</th>
                <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #333232ff", color: "black" }}>Phone</th>
                <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #4f4d4dff", color: "black" }}>Services</th>
                <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #424242ff", color: "black" }}>Date</th>
                <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #2d2c2cff", color: "black" }}>Use_id</th>
                <th style={{ textAlign: "center", padding: "8px", borderBottom: "1px solid #3a3939ff", color: "black" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a._id || `${a.userId}-${a.date}`}>
                  <td style={{ padding: "8px", borderBottom: "1px solid #f3e9e9ff" , color: "black"}}>{a.name}</td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #e4e2e2ff" , color: "black"}}>{a.phone}</td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #f8f2f2ff" , color: "black"}}>
                    {Array.isArray(a.services) ? a.services.join(", ") : String(a.services)}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #f0ededff" , color: "black"}}>
                    {a.date ? new Date(a.date).toLocaleString() : "-"}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #f5f4f4ff"  , color: "black"}}>
                    {a.userId ? (typeof a.userId === "object" ? (a.userId.email || a.userId._id) : a.userId) : "-"}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #f8f1f1ff", textAlign: "center" }}>
                    <button
                      onClick={() => cancelAppointment(a._id)}
                      disabled={cancellingId === a._id}
                      style={{
                        padding: "6px 10px",
                        borderRadius: 6,
                        border: "none",
                        background: cancellingId === a._id ? "#6a6868ff" : "#dc3545",
                        color: "#fff1f1ff",
                        cursor: cancellingId === a._id ? "not-allowed" : "pointer",
                      }}
                    >
                      {cancellingId === a._id ? "Cancelling..." : "Cancel"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
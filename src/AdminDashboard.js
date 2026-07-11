import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

import {
        
    collection,
    getDocs,
    deleteDoc,
    updateDoc,
    doc,
    query,
    orderBy,
} from "firebase/firestore";

import { db } from "./firebase";

import {
  FaEnvelope,
  FaSearch,
  FaTrash,
  FaEye,
  FaCheckCircle,
} from "react-icons/fa";

function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectMessage, setSelectedMessages] = useState(null);
  const [unreadCount, setUnreadCount] =useState(0);

  // Fetch messages
  const fetchMessages = async () => {
    try {
      const q = query(
        collection(db, "contactMessages"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMessages(data);
      
      setFilteredMessages(data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Search
  useEffect(() => {
    const result = messages.filter((msg) =>
      msg.name?.toLowerCase().includes(search.toLowerCase()) ||
      msg.subject?.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredMessages(result);
  }, [search, messages]);

  // Mark Read
  const markRead = async (id) => {
    await updateDoc(doc(db, "contactMessages", id), {
      status: "Read",
    });

    fetchMessages();
  };

  // Mark Unread
  const markUnread = async (id) => {
    await updateDoc(doc(db, "contactMessages", id), {
      status: "Unread",
    });

    fetchMessages();
  };

  // Delete
  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    await deleteDoc(doc(db, "contactMessages", id));

    fetchMessages();
  };

  // Statistics

  const total = messages.length;

  const unread = messages.filter(
    (m) => m.status === "Unread" || !m.status
  ).length;

  const read = messages.filter(
    (m) => m.status === "Read"
  ).length;

  return (
    <div className="admin">

      <aside className="sidebar">
        <h2>🏦 ShineUp</h2>

        

        <ul>
          <li className="active">
            <FaEnvelope />
            Messages
          </li>
        </ul>
      </aside>

      <main className="content">

        <div className="topbar">
          <h1>Admin Dashboard</h1>
        </div>

        <div className="cards">

          <div className="card">
            <h3>Total</h3>
            <p>{total}</p>
          </div>

          <div className="card">
            <h3>Unread</h3>
            <p>{unread}</p>
          </div>

          <div className="card">
            <h3>Read</h3>
            <p>{read}</p>
          </div>

        </div>

        <div className="search-box">
          <FaSearch />

          <input
            placeholder="Search sender or subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <table>

            <thead>

              <tr>
                <th>Sender</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredMessages.map((msg) => (

                <tr key={msg.id}>

                  <td>{msg.name}</td>

                  <td>{msg.subject}</td>

                  <td>

                    <span
                      className={
                        msg.status === "Read"
                          ? "badge read"
                          : "badge unread"
                      }
                    >
                      {msg.status || "Unread"}
                    </span>

                  </td>

                  <td>

                    <button
                      className="view"
                      onClick={() => alert(msg.message)}
                    >
                      <FaEye />
                    </button>

                    {msg.status === "Read" ? (
                      <button
                        className="mark"
                        onClick={() => markUnread(msg.id)}
                      >
                        Unread
                      </button>
                    ) : (
                      <button
                        className="mark"
                        onClick={() => markRead(msg.id)}
                      >
                        <FaCheckCircle />
                      </button>
                    )}

                    <button
                      className="delete"
                      onClick={() => deleteMessage(msg.id)}
                    >
                      <FaTrash />
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>
        )}

      </main>

    </div>
  );
}

export default AdminDashboard;
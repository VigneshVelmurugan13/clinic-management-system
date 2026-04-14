const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 TEST ROUTE
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// ✅ GET PATIENTS
app.get("/patients", (req, res) => {
    db.all("SELECT * FROM patients", [], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});

// ✅ ADD PATIENT
app.post("/patients", (req, res) => {
    const { name, age, disease } = req.body;

    db.run(
        "INSERT INTO patients (name, age, disease) VALUES (?, ?, ?)",
        [name, age, disease],
        function (err) {
            if (err) return res.status(500).json(err);
            res.json({ id: this.lastID });
        }
    );
});

// ✅ DELETE PATIENT
app.delete("/patients/:id", (req, res) => {
    db.run("DELETE FROM patients WHERE id = ?", [req.params.id], function (err) {
        if (err) return res.status(500).json(err);
        res.json({ message: "Deleted" });
    });
});

// ✅ GET DOCTORS
app.get("/doctors", (req, res) => {
    db.all("SELECT * FROM doctors", [], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});

// ✅ ADD DOCTOR
app.post("/doctors", (req, res) => {
    const { name, specialization } = req.body;

    db.run(
        "INSERT INTO doctors (name, specialization) VALUES (?, ?)",
        [name, specialization],
        function (err) {
            if (err) return res.status(500).json(err);
            res.json({ id: this.lastID });
        }
    );
});

// ✅ BOOK APPOINTMENT
app.post("/appointments", (req, res) => {
    const { patient_id, doctor_id, date, priority } = req.body;

    db.run(
        "INSERT INTO appointments (patient_id, doctor_id, date, priority) VALUES (?, ?, ?, ?)",
        [patient_id, doctor_id, date, priority],
        function (err) {
            if (err) return res.status(500).json(err);
            res.json({ id: this.lastID });
        }
    );
});

// ✅ GET APPOINTMENTS
app.get("/appointments", (req, res) => {
    db.all("SELECT * FROM appointments", [], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});


// 🔥🔥🔥 MOST IMPORTANT FIX
app.listen(5000, "0.0.0.0", () => {
    console.log("🚀 Server running on port 5000");
});
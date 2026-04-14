const API_URL = "http://13.48.129.239:5000";

// LOGIN (dummy)
function login() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("appSection").style.display = "block";
    loadPatients();
    loadDoctors();
    loadAppointments();
}

function logout() {
    location.reload();
}

// ------------------ PATIENT ------------------

function loadPatients() {
    fetch(`${API_URL}/patients`)
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("patients");
            container.innerHTML = "";

            data.forEach(p => {
                container.innerHTML += `
                    <div class="d-flex justify-content-between mb-2">
                        <span>${p.id} - ${p.name} (${p.disease})</span>
                        <button class="btn btn-danger btn-sm" onclick="deletePatient(${p.id})">Delete</button>
                    </div>
                `;
            });
        });
}

function addPatient() {
    const name = document.getElementById("pname").value;
    const age = document.getElementById("page").value;
    const disease = document.getElementById("pdisease").value;

    fetch(`${API_URL}/patients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age, disease })
    }).then(() => {
        loadPatients();
    });
}

function deletePatient(id) {
    fetch(`${API_URL}/patients/${id}`, {
        method: "DELETE"
    }).then(() => {
        loadPatients();
    });
}

// ------------------ DOCTOR ------------------

function loadDoctors() {
    fetch(`${API_URL}/doctors`)
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("doctors");
            container.innerHTML = "";

            data.forEach(d => {
                container.innerHTML += `
                    <div>${d.id} - ${d.name} (${d.specialization})</div>
                `;
            });
        });
}

function addDoctor() {
    const name = document.getElementById("dname").value;
    const specialization = document.getElementById("dspec").value;

    fetch(`${API_URL}/doctors`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, specialization })
    }).then(() => {
        loadDoctors();
    });
}

// ------------------ APPOINTMENT ------------------

function loadAppointments() {
    fetch(`${API_URL}/appointments`)
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("appointments");
            container.innerHTML = "";

            data.forEach(a => {
                container.innerHTML += `
                    <div>
                        Appointment: Patient ${a.patient_id} with Doctor ${a.doctor_id} on ${a.date} (${a.priority})
                    </div>
                `;
            });
        });
}

function bookAppointment() {
    const patient_id = document.getElementById("patientId").value;
    const doctor_id = document.getElementById("doctorId").value;
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;

    fetch(`${API_URL}/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patient_id, doctor_id, date, priority })
    }).then(() => {
        alert("✅ Appointment booked successfully");
        loadAppointments();
    });
}
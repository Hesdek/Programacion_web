import express from 'express';
import patientRoutes from './routes/patientRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import appointmentRoutes from './routes/AppointmentRoutes.js';

const app = express();
app.use(express.json());

app.use('/patient', patientRoutes);
app.use('/doctor', doctorRoutes);
app.use('/appointment', appointmentRoutes);

export default app;

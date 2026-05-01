import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardLayout from './layouts/DashboardLayout';

// Import Specialized Overviews
import AdminOverview from './dashboards/Admin/AdminOverview';
import PilotOverview from './dashboards/Pilot/PilotOverview';
import PassengerOverview from './dashboards/Passenger/PassengerOverview';
import OperationsOverview from './dashboards/Operations/OperationsOverview';
import MaintenanceOverview from './dashboards/Maintenance/MaintenanceOverview';
import BookingOverview from './dashboards/Ticketing/BookingOverview';

// Admin Pages
import AirportManagement from './dashboards/Admin/AirportManagement';
import AircraftManagement from './dashboards/Admin/AircraftManagement';
import StaffManagement from './dashboards/Admin/StaffManagement';
import FlightScheduling from './dashboards/Admin/FlightScheduling';
import AdminReports from './dashboards/Admin/Reports';
import AdminNotifications from './dashboards/Admin/Notifications';
import SystemSettings from './dashboards/Admin/SystemSettings';
import KYCApprovals from './dashboards/Admin/KYCApprovals';

// Pilot Pages
import AssignedFlights from './dashboards/Pilot/AssignedFlights';
import FlightLogs from './dashboards/Pilot/FlightLogs';
import WeatherReports from './dashboards/Pilot/WeatherReports';
import FlightSchedule from './dashboards/Pilot/FlightSchedule';
import PilotMessages from './dashboards/Pilot/Messages';
import PilotNotifications from './dashboards/Pilot/Notifications';
import PilotProfile from './dashboards/Pilot/Profile';

// Passenger Pages
import MyTickets from './dashboards/Passenger/MyTickets';
import BookingHistory from './dashboards/Passenger/BookingHistory';
import FlightStatus from './dashboards/Passenger/FlightStatus';
import Checkin from './dashboards/Passenger/Checkin';
import PassengerNotifications from './dashboards/Passenger/Notifications';
import PassengerSupport from './dashboards/Passenger/Support';
import PassengerProfile from './dashboards/Passenger/Profile';

// Operations/Maintenance/Ticketing
import FlightTracking from './dashboards/Operations/FlightTracking';
import DepartureManagement from './dashboards/Operations/DepartureManagement';
import ArrivalManagement from './dashboards/Operations/ArrivalManagement';
import GateManagement from './dashboards/Operations/GateManagement';
import DelayMonitoring from './dashboards/Operations/DelayMonitoring';
import OperationsReports from './dashboards/Operations/Reports';
import OperationsAlerts from './dashboards/Operations/Alerts';

import AircraftStatus from './dashboards/Maintenance/AircraftStatus';
import InspectionLogs from './dashboards/Maintenance/InspectionLogs';
import MaintenanceSchedule from './dashboards/Maintenance/MaintenanceSchedule';
import RepairRequests from './dashboards/Maintenance/RepairRequests';
import SpareParts from './dashboards/Maintenance/SpareParts';
import MaintenanceReports from './dashboards/Maintenance/Reports';
import MaintenanceAlerts from './dashboards/Maintenance/Alerts';

import TicketBooking from './dashboards/Ticketing/TicketBooking';
import TicketCancellation from './dashboards/Ticketing/TicketCancellation';
import PaymentRecords from './dashboards/Ticketing/PaymentRecords';
import PassengerList from './dashboards/Ticketing/PassengerList';
import FlightAvailability from './dashboards/Ticketing/FlightAvailability';
import TicketingReports from './dashboards/Ticketing/Reports';
import TicketingNotifications from './dashboards/Ticketing/Notifications';

// Dashboard Menu Configurations
const dashboardMenus = {
  admin: [
    { label: 'Overview', path: '/admin' },
    { label: 'Airport Management', path: '/admin/airport' },
    { label: 'Aircraft Management', path: '/admin/aircraft' },
    { label: 'Staff Management', path: '/admin/staff' },
    { label: 'Flight Scheduling', path: '/admin/scheduling' },
    { label: 'Reports', path: '/admin/reports' },
    { label: 'KYC Approvals', path: '/admin/kyc' },
    { label: 'Notifications', path: '/admin/notifications' },
    { label: 'System Settings', path: '/admin/settings' },
  ],
  pilot: [
    { label: 'Pilot Overview', path: '/pilot' },
    { label: 'Assigned Flights', path: '/pilot/assigned' },
    { label: 'Flight Logs', path: '/pilot/logs' },
    { label: 'Weather Reports', path: '/pilot/weather' },
    { label: 'Flight Schedule', path: '/pilot/schedule' },
    { label: 'Messages', path: '/pilot/messages' },
    { label: 'Notifications', path: '/pilot/notifications' },
    { label: 'Profile', path: '/pilot/profile' },
  ],
  passenger: [
    { label: 'Passenger Overview', path: '/passenger' },
    { label: 'My Tickets', path: '/passenger/tickets' },
    { label: 'Booking History', path: '/passenger/history' },
    { label: 'Flight Status', path: '/passenger/status' },
    { label: 'Check-in', path: '/passenger/checkin' },
    { label: 'Notifications', path: '/passenger/notifications' },
    { label: 'Support', path: '/passenger/support' },
    { label: 'Profile', path: '/passenger/profile' },
  ],
  operations: [
    { label: 'Operations Overview', path: '/operations' },
    { label: 'Flight Tracking', path: '/operations/tracking' },
    { label: 'Departure Management', path: '/operations/departure' },
    { label: 'Arrival Management', path: '/operations/arrival' },
    { label: 'Gate Management', path: '/operations/gate' },
    { label: 'Delay Monitoring', path: '/operations/delays' },
    { label: 'Reports', path: '/operations/reports' },
    { label: 'Alerts', path: '/operations/alerts' },
  ],
  maintenance: [
    { label: 'Maintenance Overview', path: '/maintenance' },
    { label: 'Aircraft Status', path: '/maintenance/status' },
    { label: 'Inspection Logs', path: '/maintenance/logs' },
    { label: 'Maintenance Schedule', path: '/maintenance/schedule' },
    { label: 'Repair Requests', path: '/maintenance/repairs' },
    { label: 'Spare Parts', path: '/maintenance/parts' },
    { label: 'Reports', path: '/maintenance/reports' },
    { label: 'Alerts', path: '/maintenance/alerts' },
  ],
  ticketing: [
    { label: 'Booking Overview', path: '/ticketing' },
    { label: 'Ticket Booking', path: '/ticketing/booking' },
    { label: 'Ticket Cancellation', path: '/ticketing/cancellation' },
    { label: 'Payment Records', path: '/ticketing/payments' },
    { label: 'Passenger List', path: '/ticketing/passengers' },
    { label: 'Flight Availability', path: '/ticketing/availability' },
    { label: 'Reports', path: '/ticketing/reports' },
    { label: 'Notifications', path: '/ticketing/notifications' },
  ]
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<AdminOverview menus={dashboardMenus.admin} />} />
        <Route path="/admin/airport" element={<AirportManagement menus={dashboardMenus.admin} />} />
        <Route path="/admin/aircraft" element={<AircraftManagement menus={dashboardMenus.admin} />} />
        <Route path="/admin/staff" element={<StaffManagement menus={dashboardMenus.admin} />} />
        <Route path="/admin/scheduling" element={<FlightScheduling menus={dashboardMenus.admin} />} />
        <Route path="/admin/reports" element={<AdminReports menus={dashboardMenus.admin} />} />
        <Route path="/admin/kyc" element={<KYCApprovals menus={dashboardMenus.admin} />} />
        <Route path="/admin/notifications" element={<AdminNotifications menus={dashboardMenus.admin} />} />
        <Route path="/admin/settings" element={<SystemSettings menus={dashboardMenus.admin} />} />

        {/* Pilot Dashboard Routes */}
        <Route path="/pilot" element={<PilotOverview menus={dashboardMenus.pilot} />} />
        <Route path="/pilot/assigned" element={<AssignedFlights menus={dashboardMenus.pilot} />} />
        <Route path="/pilot/logs" element={<FlightLogs menus={dashboardMenus.pilot} />} />
        <Route path="/pilot/weather" element={<WeatherReports menus={dashboardMenus.pilot} />} />
        <Route path="/pilot/schedule" element={<FlightSchedule menus={dashboardMenus.pilot} />} />
        <Route path="/pilot/messages" element={<PilotMessages menus={dashboardMenus.pilot} />} />
        <Route path="/pilot/notifications" element={<PilotNotifications menus={dashboardMenus.pilot} />} />
        <Route path="/pilot/profile" element={<PilotProfile menus={dashboardMenus.pilot} />} />

        {/* Passenger Dashboard Routes */}
        <Route path="/passenger" element={<PassengerOverview menus={dashboardMenus.passenger} />} />
        <Route path="/passenger/tickets" element={<MyTickets menus={dashboardMenus.passenger} />} />
        <Route path="/passenger/history" element={<BookingHistory menus={dashboardMenus.passenger} />} />
        <Route path="/passenger/status" element={<FlightStatus menus={dashboardMenus.passenger} />} />
        <Route path="/passenger/checkin" element={<Checkin menus={dashboardMenus.passenger} />} />
        <Route path="/passenger/notifications" element={<PassengerNotifications menus={dashboardMenus.passenger} />} />
        <Route path="/passenger/support" element={<PassengerSupport menus={dashboardMenus.passenger} />} />
        <Route path="/passenger/profile" element={<PassengerProfile menus={dashboardMenus.passenger} />} />

        {/* Operations Dashboard Routes */}
        <Route path="/operations" element={<OperationsOverview menus={dashboardMenus.operations} />} />
        <Route path="/operations/tracking" element={<FlightTracking menus={dashboardMenus.operations} />} />
        <Route path="/operations/departure" element={<DepartureManagement menus={dashboardMenus.operations} />} />
        <Route path="/operations/arrival" element={<ArrivalManagement menus={dashboardMenus.operations} />} />
        <Route path="/operations/gate" element={<GateManagement menus={dashboardMenus.operations} />} />
        <Route path="/operations/delays" element={<DelayMonitoring menus={dashboardMenus.operations} />} />
        <Route path="/operations/reports" element={<OperationsReports menus={dashboardMenus.operations} />} />
        <Route path="/operations/alerts" element={<OperationsAlerts menus={dashboardMenus.operations} />} />

        {/* Maintenance Dashboard Routes */}
        <Route path="/maintenance" element={<MaintenanceOverview menus={dashboardMenus.maintenance} />} />
        <Route path="/maintenance/status" element={<AircraftStatus menus={dashboardMenus.maintenance} />} />
        <Route path="/maintenance/logs" element={<InspectionLogs menus={dashboardMenus.maintenance} />} />
        <Route path="/maintenance/schedule" element={<MaintenanceSchedule menus={dashboardMenus.maintenance} />} />
        <Route path="/maintenance/repairs" element={<RepairRequests menus={dashboardMenus.maintenance} />} />
        <Route path="/maintenance/parts" element={<SpareParts menus={dashboardMenus.maintenance} />} />
        <Route path="/maintenance/reports" element={<MaintenanceReports menus={dashboardMenus.maintenance} />} />
        <Route path="/maintenance/alerts" element={<MaintenanceAlerts menus={dashboardMenus.maintenance} />} />

        {/* Ticketing Dashboard Routes */}
        <Route path="/ticketing" element={<BookingOverview menus={dashboardMenus.ticketing} />} />
        <Route path="/ticketing/booking" element={<TicketBooking menus={dashboardMenus.ticketing} />} />
        <Route path="/ticketing/cancellation" element={<TicketCancellation menus={dashboardMenus.ticketing} />} />
        <Route path="/ticketing/payments" element={<PaymentRecords menus={dashboardMenus.ticketing} />} />
        <Route path="/ticketing/passengers" element={<PassengerList menus={dashboardMenus.ticketing} />} />
        <Route path="/ticketing/availability" element={<FlightAvailability menus={dashboardMenus.ticketing} />} />
        <Route path="/ticketing/reports" element={<TicketingReports menus={dashboardMenus.ticketing} />} />
        <Route path="/ticketing/notifications" element={<TicketingNotifications menus={dashboardMenus.ticketing} />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

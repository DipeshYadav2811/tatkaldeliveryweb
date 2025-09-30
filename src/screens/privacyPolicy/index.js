import React, { useEffect } from "react";
// import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, List, ListItem, ListItemText, Container, Paper } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const sections = [
//   {
//     id: "introduction",
//     title: "Introduction",
//     content:
//       "Welcome to RapidRoute Logistics LLP. This Privacy Policy explains how we collect, use, and protect your information when you use our services. By accessing or using our services, you agree to the terms outlined in this Privacy Policy.",
//     "description": "We collect various types of information to provide, enhance, and secure our services. This includes:",
//   },
//   {
//     id: "info-collect",
//     title: "Information We Collect",
//     content:
//       "We collect various types of information to provide, enhance, and secure our services. This includes Personal Information, Location Information, Account and Usage Information, Communication Data, and Uploaded Files.",
//       sectionsList: [
//         {
//           "title": "Personal Information",
//           "details": [
//             "Full Name",
//             "Email Address",
//             "Phone Number",
//             "Residential/Delivery Address",
//             "Identification Documents (for account verification and compliance)",
//             "Payment Details (e.g., credit/debit card information, UPI ID, or other payment methods)"
//           ]
//         },
//         {
//           "title": "Location Information",
//           "details": [
//             "Real-time GPS data to facilitate accurate pick-up and delivery.",
//             "Location data of drivers for route optimization and efficient service management."
//           ]
//         },
//         {
//           "title": "Account and Usage Information",
//           "details": [
//             "Features accessed",
//             "Pages viewed",
//             "Click patterns",
//             "App performance and crash reports",
//             "Device details, such as IP address, operating system, browser type, and unique device identifiers"
//           ]
//         },
//         {
//           "title": "Communication Data",
//           "details": [
//             "Call and SMS logs for delivery coordination (if allowed by applicable law)",
//             "Chat records within the Tatkal Delivery app",
//             "Email correspondence"
//           ]
//         },
//         {
//           "title": "Uploaded Files",
//           "details": [
//             "Images (e.g., photos of parcels, proof of delivery)",
//             "Documents (e.g., invoices, receipts, or other materials)"
//           ]
//         }
//       ]
//     },
//   {
//     id: "use-info",
//     title: "How We Use Your Information",
//     content:
//       "Your data is used for service provision, payment processing, communication, legal compliance, fraud prevention, and marketing (subject to consent).",
//     sectionsList: [
//     {
//       "title": "Service Provision and Management",
//       "details": [
//         "To process bookings for packing, moving, or delivery services",
//         "To coordinate between users and delivery partners",
//         "To track and update delivery progress"
//       ]
//     },
//     {
//       "title": "Payment Processing",
//       "details": [
//         "To process payments, refunds, and generate invoices"
//       ]
//     },
//     {
//       "title": "Improvement of Services",
//       "details": [
//         "To analyze user behavior and preferences to improve our website and app experience",
//         "To develop new features and optimize service performance"
//       ]
//     },
//     {
//       "title": "Communication",
//       "details": [
//         "To send updates, transaction details, and service-related notifications",
//         "To respond to inquiries, provide support, and resolve issues"
//       ]
//     },
//     {
//       "title": "Legal Compliance",
//       "details": [
//         "To fulfill legal, regulatory, and contractual obligations",
//         "To assist law enforcement when required"
//       ]
//     },
//     {
//       "title": "Fraud Prevention",
//       "details": [
//         "To detect and prevent unauthorized activities, fraud, and abuse"
//       ]
//     },
//     {
//       "title": "Marketing and Promotions",
//       "details": [
//         "To send you promotional offers, discounts, and updates about new services (subject to your consent)"
//       ]
//     }
//   ]
//     },
//   {
//     id: "share-info",
//     title: "Sharing Your Information",
//     content:
//       "We may share your information with delivery partners, third-party service providers, and legal authorities as required.",
//       "sectionsList": [
//         {
//           "title": "Delivery Partners",
//           "details": [
//             "To complete your delivery requests, we share relevant information with delivery personnel, such as pickup and drop-off details."
//           ]
//         },
//         {
//           "title": "Third-Party Service Providers",
//           "details": [
//             "Payment processing",
//             "Identity verification",
//             "IT infrastructure hosting",
//             "Data analytics"
//           ]
//         },
//         {
//           "title": "Legal and Regulatory Authorities",
//           "details": [
//             "Comply with legal obligations",
//             "Protect our legal rights",
//             "Respond to lawful requests by public authorities, including law enforcement"
//           ]
//         },
//         {
//           "title": "Business Transfers",
//           "details": [
//             "In the event of a merger, acquisition, or sale of all or part of our business, user information may be transferred to the new entity."
//           ]
//         }
//       ]
//     },
//   {
//     id: "data-retention",
//     title: "Data Retention",
//     content:
//       "We retain your data as long as necessary for service delivery or legal obligations. Deleted accounts are anonymized unless otherwise required by law.",
//   },
//   {
//     id: "security",
//     title: "Security Measures",
//     content:
//       "We use encryption, secure servers, and regular audits to protect your data. However, no system is 100% secure.",
//     "sectionsList": [
//     {
//       "title": "Security Measures",
//       "details": [
//         "Encryption of sensitive information during transmission",
//         "Secure data storage using firewalls and multi-layered access controls",
//         "Regular vulnerability assessments and audits",
//         "However, no system is 100% secure, and we cannot guarantee absolute security."
//       ]
//     }
//   ]
//     },
//   {
//     id: "rights",
//     title: "Your Rights",
//     content:
//       "You have the right to access, correct, delete your personal data (subject to legal requirements), and withdraw consent for processing activities.",
//     "sectionsList": [
//     {
//       "title": "Access and Correction",
//       "details": [
//         "Request access to the personal data we hold about you.",
//         "Request corrections to inaccurate or incomplete data."
//       ]
//     },
//     {
//       "title": "Data Deletion",
//       "details": [
//         "Request deletion of your account and associated data (subject to legal requirements)."
//       ]
//     },
//     {
//       "title": "Data Portability",
//       "details": [
//         "Receive your personal data in a structured, machine-readable format."
//       ]
//     },
//     {
//       "title": "Consent Withdrawal",
//       "details": [
//         "Opt-out of marketing communications or withdraw previously given consent for specific processing activities."
//       ]
//     },
//     {
//       "title": "Contact Information",
//       "details": [
//         "To exercise your rights, contact us at support@rapidroute.com."
//       ]
//     }
//   ]
//     },
//   {
//     id: "cookies",
//     title: "Cookies and Tracking Technologies",
//     content:
//       "We use cookies to enhance your experience. You can manage your preferences in browser settings.",
//       "sectionsList": [
//         {
//           "title": "Usage of Cookies",
//           "details": [
//             "Analyze website traffic and app usage.",
//             "Personalize user experience.",
//             "Store your preferences.",
//             "You can manage cookie settings in your browser or device settings."
//           ]
//         }
//       ]
//     },
//   {
//     id: "changes",
//     title: "Changes to This Privacy Policy",
//     content:
//       "We may update this policy from time to time. The latest version will be available on our website.",
//   },
//   {
//     id: "contact",
//     title: "Contact Us",
//     content:
//       "For questions, contact us at support@rapidroute.com or visit us at our office.",
//     "sectionsList": [
//     {
//       "title": "Contact Information",
//       "details": [
//         "RapidRoute Logistics LLP",
//         "Email: tatkaldelivery@gmail.com",
//       ]
//     }
//   ]
//     },
// ];

// const PrivacyPolicy = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <Box sx={{ minHeight: "100vh" }}>
//       {/* Header Section */}
//       <Box
//         sx={{
//           background: "#C88F13",
//           color: "white",
//           py: 6,
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h3" fontWeight="bold">
//           Privacy Policy
//         </Typography>
//         <Typography variant="subtitle1" sx={{ mt: 2 }}>
//           Your privacy is important to us. Here’s how we handle your data.
//         </Typography>
//       </Box>

//       {/* Main Content */}
//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         <Grid container spacing={4}>
//           {/* Sidebar Navigation */}
//           <Grid item xs={12} md={3}>
//             <Paper elevation={3} sx={{ p: 2, position: "sticky", top: 20 }}>
//               <Typography variant="h6" gutterBottom>
//                 Sections
//               </Typography>
//               <List>
//                 {sections.map((section) => (
//                   <ListItem
//                     button
//                     key={section.id}
//                     component="a"
//                     href={`#${section.id}`}
//                   >
//                     <ListItemText primary={section.title} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Paper>
//           </Grid>

//           {/* Content */}
//           <Grid item xs={12} md={9}>
//             {sections.map((section) => (
//               <Box key={section.id} id={section.id} sx={{ mb: 4 }}>
//                 <Typography
//                   variant="h4"
//                   color={"#F95C19"}
//                   fontWeight="bold"
//                   gutterBottom
//                 >
//                   {section.title}
//                 </Typography>
//                 <Typography variant="body1" color="textSecondary">
//                   {section.content}
//                 </Typography>
//                 <Accordion
//                   sx={{ mt: 2, boxShadow: "none", border: "1px solid #ddd" }}
//                 >
//                   <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography variant="h6" fontWeight="medium">
//                       More Details
//                     </Typography>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Typography variant="body2" color="textSecondary">
//                       {section.content}
//                     </Typography>
//                   {
//                     section?.sectionsList?.map((item, index) => (
//                       <div>
//                         <h3>{index+1}. {item?.title}</h3>
//                     <ul>
//                       {
//                         item?.details?.map((detail, index) => (
//                           <li>{detail}</li>
//                         ))
//                       }
//                     </ul>
//                       </div>
//                     ))
//                   }
//                   </AccordionDetails>
//                 </Accordion>
//               </Box>
//             ))}
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default PrivacyPolicy;


import './style.css'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-updated">Last updated: September 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          <strong>RapidRoute Logistics LLP</strong> (“we”, “us”, “our”) respects
          your privacy and is committed to protecting your personal information.
          This Privacy Policy describes how we collect, use, disclose, and
          safeguard the information you provide when you use the{" "}
          <strong>Tatkal Delivery User / Driver App</strong>, its website, or associated
          services (collectively, the “Services”). By using the Services, you
          agree to the collection and use of information in accordance with this
          policy.
        </p>
      </section>

      <section>
        <h2>2. Scope</h2>
        <p>
          This Privacy Policy applies to all users (“you”, “user”) of the
          Services (the app, website, APIs, or other digital interactions). It
          covers the collection, storage, transfer, disclosure, and deletion of
          personal data in connection with your access or use of the Services.
        </p>
      </section>

      <section>
        <h2>3. Information We Collect</h2>
        <h3>a) Information you provide directly</h3>
        <ul>
          <li>Name, email address, phone number</li>
          <li>Profile information (e.g. username, address)</li>
          <li>Delivery addresses (pickup and drop-off)</li>
          <li>Payment information (via third-party payment gateways)</li>
          <li>Communications with us (support queries, feedback)</li>
          <li>
            Documents, images, and identity verification data (if required for
            compliance)
          </li>
        </ul>

        <h3>b) Automatically collected information</h3>
        <ul>
          <li>Device details (model, OS, app version)</li>
          <li>Usage logs, timestamps, app interactions</li>
          <li>GPS/location data (for pickups/deliveries)</li>
          <li>IP address, browser type</li>
          <li>Cookies, analytics data</li>
        </ul>

        <h3>c) Information from third parties</h3>
        <ul>
          <li>Payment processors</li>
          <li>Address verification services</li>
          <li>Marketing or analytics partners</li>
          <li>Publicly available data</li>
        </ul>
      </section>

      <section>
        <h2>4. Use of Collected Information</h2>
        <p>We use the collected data to:</p>
        <ul>
          <li>Operate and improve the Services</li>
          <li>Process user orders and deliveries</li>
          <li>Enable communication between users, drivers, and support</li>
          <li>Fraud detection, risk mitigation, and security</li>
          <li>Verify identity (KYC, compliance)</li>
          <li>Marketing, promotions, and notifications</li>
          <li>Analytics and user engagement insights</li>
          <li>Legal and regulatory compliance</li>
        </ul>
      </section>

      <section>
        <h2>5. Disclosure of Information</h2>
        <p>We do not sell your personal data. We may share data with:</p>
        <ul>
          <li>
            Service providers and partners (payments, cloud, analytics,
            delivery)
          </li>
          <li>Legal authorities (if required by law)</li>
          <li>
            In case of mergers, acquisitions, or asset transfers (with
            safeguards)
          </li>
          <li>To protect safety, rights, and prevent harm</li>
          <li>With your consent, in specific cases</li>
        </ul>
      </section>

      <section>
        <h2>6. Data Retention & Deletion</h2>
        <p>
          We retain your data as long as necessary to provide{" "}
          <strong>Tatkal Delivery App</strong> services and comply with legal
          obligations. When no longer needed, we delete or anonymize data. You
          may request deletion of your data, subject to legal constraints.
        </p>
      </section>

      <section>
        <h2>7. Security</h2>
        <p>
          We implement technical, administrative, and physical safeguards to
          protect your information. However, no system is 100% secure. You are
          also responsible for keeping login credentials safe.
        </p>
      </section>

      <section>
        <h2>8. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies, web beacons, and similar technologies for analytics,
          preferences, and marketing. You can disable cookies, but some features
          may stop working.
        </p>
      </section>

      <section>
        <h2>9. Third-Party Analytics & Advertising</h2>
        <p>
          We use analytics tools (e.g., Google Analytics) to improve our
          services. Third-party ad networks may also use cookies. Their
          practices are governed by their own privacy policies.
        </p>
      </section>

      <section>
        <h2>10. Children’s Privacy</h2>
        <p>
          Our services are not intended for children under 13. We do not
          knowingly collect data from children. If discovered, such data will be
          deleted.
        </p>
      </section>

      <section>
        <h2>11. International Transfers</h2>
        <p>
          Your data may be stored or processed in countries other than your
          residence. We ensure appropriate safeguards are in place for such
          transfers.
        </p>
      </section>

      <section>
        <h2>12. Your Rights & Controls</h2>
        <ul>
          <li>Access, rectify, or delete your data</li>
          <li>Opt-out of marketing</li>
          <li>Restrict or object to processing</li>
          <li>Request data portability</li>
          <li>Withdraw consent for certain processing</li>
          <li>
            File complaints with data protection authorities (where applicable)
          </li>
        </ul>
      </section>

      <section>
        <h2>13. Changes to This Policy</h2>
        <p>
          <strong>RapidRoute Logistics LLP</strong> may update this Privacy
          Policy. Updates will be posted here with the “Last updated” date.
          Continued use of our services means acceptance of the revised policy.
        </p>
      </section>

      <section>
        <h2>14. Contact Us</h2>
        <p>
          For questions or concerns about this Privacy Policy, contact us at:{" "}
          <br />
          📧 support@rapidroute.com <br />
          {/* 📞 +91-XXXXXXXXXX  <br />*/}
          
          📍 RapidRoute Logistics LLP
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;


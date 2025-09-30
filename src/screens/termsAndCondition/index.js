import React, { useEffect } from "react";
// import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, List, ListItem, ListItemText, Container, Paper } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const sections = [
//   {
//     id: "introduction",
//     title: "Introduction",
//     content: "Welcome to RAPIDROUTE LOGISTICS LLP ('we,' 'us,' or 'our'). These Terms and Conditions ('Terms') govern your use of the Tatkal Delivery mobile application ('App') and the services provided by RAPIDROUTE LOGISTICS LLP, including our packing, moving, parcel, and package delivery services ('Services'). By using the App and our Services, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the App or Services."
//   },
//   {
//     id: "services",
//     title: "Services",
//     content: "RAPIDROUTE LOGISTICS LLP provides the following services through the Tatkal Delivery mobile app:",
//     sectionsList: [
//       {
//         title: "Packing and Moving Services",
//         details: ["Professional packing and moving for household goods, office supplies, etc."]
//       },
//       {
//         title: "Parcel and Package Delivery",
//         details: ["Safe and fast delivery of parcels and packages of various sizes."]
//       }
//     ]
//   },
//   {
//     id: "eligibility",
//     title: "Eligibility",
//     content: "You must be at least 18 years old and capable of entering into a legally binding agreement to use our App and Services. By accessing or using the App, you represent and warrant that you meet these requirements."
//   },
//   {
//     id: "user-account",
//     title: "User Account",
//     content: "To access and use certain features of the App, you may be required to create an account. You agree to provide accurate, complete, and updated information when creating your account. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities under your account."
//   },
//   {
//     id: "use-of-services",
//     title: "Use of Services",
//     content: "By requesting our Services through the App, you agree to the following:",
//     sectionsList: [
//       {
//         title: "Use of Services",
//         details:["You will provide accurate and complete details regarding the items to be packed, moved, or delivered.",
//       "Certain items may be restricted or prohibited from transportation. RAPIDROUTE LOGISTICS LLP reserves the right to refuse service for any items that violate applicable laws, regulations, or our policies.",
//       "You are responsible for ensuring that the items are appropriately packed for transportation unless you opt for our packing services.",
//       "You agree to pay the applicable fees for the Services as outlined in the App before the Services are rendered."]}
//     ]
//   },
//   {
//     id: "payments-and-fees",
//     title: "Payments and Fees",
//     content: "All payments for the Services will be processed through the App. Payment must be made in full before the requested service is provided. Fees for services may vary depending on factors such as the size, weight, and distance of the delivery, and will be clearly outlined in the App before payment is processed."
//   },
//   {
//     id: "cancellations-and-refunds",
//     title: "Cancellations and Refunds",
//     content: "You may cancel a service request up to 24 hours before the scheduled pickup. Cancellations after this period may incur cancellation fees.",
//     sectionsList: [
//       {
//         title: "Cancellations",
//         details: ["You may cancel a service request up to 24 hours before the scheduled pickup. Cancellations after this period may incur cancellation fees."]
//       },
//       {
//         title: "Refunds",
//         details: ["Refunds for services will be processed at RAPIDROUTE LOGISTICS LLP’s discretion, subject to applicable laws and the nature of the service provided."]
//       }
//     ]
//   },
//   {
//     id: "delivery-and-handling",
//     title: "Delivery and Handling",
//     content: "RAPIDROUTE LOGISTICS LLP is committed to providing timely and safe delivery services. However, we are not responsible for delays or damages caused by unforeseen circumstances, such as adverse weather conditions, roadblocks, or actions by third parties."
//   },
//   {
//     id: "prohibited-items",
//     title: "Prohibited Items",
//     content: "The following items are strictly prohibited for transport through our Services:",
//     sectionsList: [
//       {
//       title: "Prohibited Items",
//       details: ["Hazardous materials (e.g., flammable, explosive, or toxic substances)",
//       "Illegal items",
//       "Perishable goods (unless specifically authorized by us)",
//       "Live animals",
//       "Any other items deemed unsafe or unsuitable for transportation by RAPIDROUTE LOGISTICS LLP"
//     ]
//   }
// ]
//   },
//   {
//     id: "liability-and-disclaimers",
//     title: "Liability and Disclaimers",
//     sectionsList: [
//       {
//         title: "Limitation of Liability",
//         details: ["RAPIDROUTE LOGISTICS LLP’s liability for any damage, loss, or delay shall be limited to the amount paid by you for the specific service that caused the damage, loss, or delay."]
//       },
//       {
//         title: "Force Majeure",
//         details: ["RAPIDROUTE LOGISTICS LLP is not responsible for delays or failure to perform due to events beyond our control, including but not limited to natural disasters, strikes, acts of war, or governmental actions."]
//       }
//     ]
//   },
//   {
//     id: "indemnity",
//     title: "Indemnity",
//     content: "You agree to indemnify and hold RAPIDROUTE LOGISTICS LLP, its officers, employees, and agents harmless from any claims, liabilities, losses, or expenses arising from your use of the App, Services, or violation of these Terms."
//   },
//   {
//     id: "privacy-and-data-protection",
//     title: "Privacy and Data Protection",
//     content: "We value your privacy and are committed to protecting your personal information. Our Privacy Policy, which is incorporated into these Terms, outlines how we collect, use, and protect your data when you use the App or Services."
//   },
//   {
//     id: "modifications-to-terms",
//     title: "Modifications to the Terms",
//     content: "RAPIDROUTE LOGISTICS LLP reserves the right to modify these Terms at any time. Continued use of the App after such modifications constitutes your acceptance of the revised Terms."
//   },
//   {
//     id: "governing-law",
//     title: "Governing Law",
//     content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms will be subject to the exclusive jurisdiction of the courts located in [City], India."
//   },
//   {
//     id: "contact-information",
//     title: "Contact Information",
//     content: "If you have any questions or concerns about these Terms or our Services, please contact us at:",
//     "sectionsList": [
//       {
//         "title": "Contact Information",
//         "details": [
//           "RapidRoute Logistics LLP",
//           "Email: tatkaldelivery@gmail.com",
//         ]
//       }
//     ]
//   }
// ];


// const TermsAndConditions = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
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
//           Terms and Conditions
//         </Typography>
//         <Typography variant="subtitle1" sx={{ mt: 2 }}>
//           Please read these Terms and Conditions carefully before using our services.
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
//                   <ListItem button key={section.id} component="a" href={`#${section.id}`}>
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
//                 <Typography variant="h4" fontWeight="bold" gutterBottom>
//                   {section.title}
//                 </Typography>
//                 <Typography variant="body1" color="textSecondary">
//                   {section.content}
//                 </Typography>
//                 <Accordion sx={{ mt: 2, boxShadow: "none", border: "1px solid #ddd" }}>
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

// export default TermsAndConditions;


import './style.css'

const TermsAndConditions = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="tnc-container">
      <h1 className="tnc-title">Terms & Conditions</h1>
      <p className="tnc-updated">Last updated: September 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          These Terms & Conditions (“Terms”, “Terms of Service”) govern your use
          of the website, mobile application, and services provided by{" "}
          <strong>RapidRoute Logistics LLP</strong> via the{" "}
          <strong>Tatkal Delivery User / Driver App</strong> (collectively, the “Services”). By
          using or accessing our Services, you agree to be bound by these Terms.
        </p>
      </section>

      <section>
        <h2>2. Services & Use</h2>
        <p>
          RapidRoute Logistics LLP provides a platform that connects users who
          want goods transported with third-party delivery partners (bike,
          three-wheeler, truck). RapidRoute does not itself own the vehicles or
          employ the drivers; rather, it operates the technology and platform to
          facilitate these services.
        </p>
        <p>
          You may use the Services only in compliance with these Terms, applicable
          laws, and not for any purpose prohibited by these Terms.
        </p>
      </section>

      <section>
        <h2>3. Booking, Payments & Pricing</h2>
        <ul>
          <li>
            When you place a booking request, you authorize RapidRoute to collect
            payment for that booking through third-party payment processors.
          </li>
          <li>
            Estimates given in the app (distance, time, cost) are indicative; the
            final cost may differ based on route, traffic, or other conditions.
          </li>
          <li>
            You are responsible for paying for the Services plus any applicable
            taxes, surcharges, or fees.
          </li>
          <li>
            In case of failure to pay, RapidRoute may suspend or discontinue your
            account or access to Services.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Prohibited Items & Usage</h2>
        <p>
          You agree not to use our Services for transporting items that are
          illegal, dangerous, hazardous, perishable (unless declared), flammable,
          or otherwise restricted by applicable laws. RapidRoute reserves the
          right to refuse transport of such items.
        </p>
      </section>

      <section>
        <h2>5. Liability & Disclaimers</h2>
        <ul>
          <li>
            RapidRoute is not liable for any loss, damage or delay arising from
            the performance of any delivery by third-party service providers.
          </li>
          <li>
            To the maximum extent permitted by law, RapidRoute disclaims all
            warranties, whether express or implied, about the Services (e.g.
            merchantability, fitness for a particular purpose).
          </li>
          <li>
            RapidRoute shall not be liable for indirect, incidental, or
            consequential damages, even if advised of the possibility of such
            damages.
          </li>
          <li>
            In any case, the maximum liability of RapidRoute under these Terms
            shall not exceed the total amount paid by you for the specific
            booking that gave rise to the claim.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless RapidRoute, its
          officers, directors, employees, agents, and third parties, from any
          claims, damages, liabilities, losses, costs, or expenses (including
          legal fees) arising from your use of the Services, your breach of these
          Terms, or your violation of any law or rights of a third party.
        </p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <ul>
          <li>
            Either you or RapidRoute may suspend or terminate your account or
            access to Services at any time for any reason, including breach of
            these Terms.
          </li>
          <li>
            Upon termination, you must stop using the Services and any rights
            granted here will cease.
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Changes to Terms</h2>
        <p>
          RapidRoute may update or modify these Terms from time to time. We will
          post the revised Terms on our website or app with a new effective date.
          Continued use of the Services after changes constitutes acceptance of
          the updated Terms.
        </p>
      </section>

      <section>
        <h2>9. Severability & Waiver</h2>
        <p>
          If any provision of these Terms is held invalid or unenforceable, that
          provision shall be limited or stricken to the minimum extent necessary,
          and the remainder of the Terms will remain in full force. Failure by
          RapidRoute to enforce any right or provision herein shall not be deemed
          a waiver of such right or provision.
        </p>
      </section>

      <section>
        <h2>10. Dispute Resolution & Governing Law</h2>
        <p>
          These Terms shall be governed by the laws of India. Any disputes shall
          be subject to the exclusive jurisdiction of courts in [Your City], India.
          Before litigation, parties may attempt mediation or alternative dispute
          resolution.
        </p>
      </section>

      <section>
        <h2>11. Acknowledgment</h2>
        <p>
          BY USING THE SERVICES PROVIDED BY RapidRoute, YOU ACKNOWLEDGE THAT YOU
          HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS & CONDITIONS.
        </p>
      </section>

      <section>
        <h2>12. Contact Us</h2>
        <p>
          For any questions or concerns about these Terms, please contact us at:  
          <br />
          📧 Email: support@rapidroute.com  
          <br />
          {/* 📞 +91-XXXXXXXXXX   <br />*/}
          
          📍 RapidRoute Logistics LLP
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;

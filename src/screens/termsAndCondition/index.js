import React, { useEffect } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, List, ListItem, ListItemText, Container, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: "Welcome to RAPIDROUTE LOGISTICS LLP ('we,' 'us,' or 'our'). These Terms and Conditions ('Terms') govern your use of the Tatkal Delivery mobile application ('App') and the services provided by RAPIDROUTE LOGISTICS LLP, including our packing, moving, parcel, and package delivery services ('Services'). By using the App and our Services, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the App or Services."
  },
  {
    id: "services",
    title: "Services",
    content: "RAPIDROUTE LOGISTICS LLP provides the following services through the Tatkal Delivery mobile app:",
    sectionsList: [
      {
        title: "Packing and Moving Services",
        details: ["Professional packing and moving for household goods, office supplies, etc."]
      },
      {
        title: "Parcel and Package Delivery",
        details: ["Safe and fast delivery of parcels and packages of various sizes."]
      }
    ]
  },
  {
    id: "eligibility",
    title: "Eligibility",
    content: "You must be at least 18 years old and capable of entering into a legally binding agreement to use our App and Services. By accessing or using the App, you represent and warrant that you meet these requirements."
  },
  {
    id: "user-account",
    title: "User Account",
    content: "To access and use certain features of the App, you may be required to create an account. You agree to provide accurate, complete, and updated information when creating your account. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities under your account."
  },
  {
    id: "use-of-services",
    title: "Use of Services",
    content: "By requesting our Services through the App, you agree to the following:",
    sectionsList: [
      {
        title: "Use of Services",
        details:["You will provide accurate and complete details regarding the items to be packed, moved, or delivered.",
      "Certain items may be restricted or prohibited from transportation. RAPIDROUTE LOGISTICS LLP reserves the right to refuse service for any items that violate applicable laws, regulations, or our policies.",
      "You are responsible for ensuring that the items are appropriately packed for transportation unless you opt for our packing services.",
      "You agree to pay the applicable fees for the Services as outlined in the App before the Services are rendered."]}
    ]
  },
  {
    id: "payments-and-fees",
    title: "Payments and Fees",
    content: "All payments for the Services will be processed through the App. Payment must be made in full before the requested service is provided. Fees for services may vary depending on factors such as the size, weight, and distance of the delivery, and will be clearly outlined in the App before payment is processed."
  },
  {
    id: "cancellations-and-refunds",
    title: "Cancellations and Refunds",
    content: "You may cancel a service request up to 24 hours before the scheduled pickup. Cancellations after this period may incur cancellation fees.",
    sectionsList: [
      {
        title: "Cancellations",
        details: ["You may cancel a service request up to 24 hours before the scheduled pickup. Cancellations after this period may incur cancellation fees."]
      },
      {
        title: "Refunds",
        details: ["Refunds for services will be processed at RAPIDROUTE LOGISTICS LLP’s discretion, subject to applicable laws and the nature of the service provided."]
      }
    ]
  },
  {
    id: "delivery-and-handling",
    title: "Delivery and Handling",
    content: "RAPIDROUTE LOGISTICS LLP is committed to providing timely and safe delivery services. However, we are not responsible for delays or damages caused by unforeseen circumstances, such as adverse weather conditions, roadblocks, or actions by third parties."
  },
  {
    id: "prohibited-items",
    title: "Prohibited Items",
    content: "The following items are strictly prohibited for transport through our Services:",
    sectionsList: [
      {
      title: "Prohibited Items",
      details: ["Hazardous materials (e.g., flammable, explosive, or toxic substances)",
      "Illegal items",
      "Perishable goods (unless specifically authorized by us)",
      "Live animals",
      "Any other items deemed unsafe or unsuitable for transportation by RAPIDROUTE LOGISTICS LLP"
    ]
  }
]
  },
  {
    id: "liability-and-disclaimers",
    title: "Liability and Disclaimers",
    sectionsList: [
      {
        title: "Limitation of Liability",
        details: ["RAPIDROUTE LOGISTICS LLP’s liability for any damage, loss, or delay shall be limited to the amount paid by you for the specific service that caused the damage, loss, or delay."]
      },
      {
        title: "Force Majeure",
        details: ["RAPIDROUTE LOGISTICS LLP is not responsible for delays or failure to perform due to events beyond our control, including but not limited to natural disasters, strikes, acts of war, or governmental actions."]
      }
    ]
  },
  {
    id: "indemnity",
    title: "Indemnity",
    content: "You agree to indemnify and hold RAPIDROUTE LOGISTICS LLP, its officers, employees, and agents harmless from any claims, liabilities, losses, or expenses arising from your use of the App, Services, or violation of these Terms."
  },
  {
    id: "privacy-and-data-protection",
    title: "Privacy and Data Protection",
    content: "We value your privacy and are committed to protecting your personal information. Our Privacy Policy, which is incorporated into these Terms, outlines how we collect, use, and protect your data when you use the App or Services."
  },
  {
    id: "modifications-to-terms",
    title: "Modifications to the Terms",
    content: "RAPIDROUTE LOGISTICS LLP reserves the right to modify these Terms at any time. Continued use of the App after such modifications constitutes your acceptance of the revised Terms."
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms will be subject to the exclusive jurisdiction of the courts located in [City], India."
  },
  {
    id: "contact-information",
    title: "Contact Information",
    content: "If you have any questions or concerns about these Terms or our Services, please contact us at:",
    "sectionsList": [
      {
        "title": "Contact Information",
        "details": [
          "RapidRoute Logistics LLP",
          "Email: tatkaldelivery@gmail.com",
        ]
      }
    ]
  }
];


const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header Section */}
      <Box
        sx={{
          background: "#C88F13",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Terms and Conditions
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Please read these Terms and Conditions carefully before using our services.
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Sidebar Navigation */}
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 2, position: "sticky", top: 20 }}>
              <Typography variant="h6" gutterBottom>
                Sections
              </Typography>
              <List>
                {sections.map((section) => (
                  <ListItem button key={section.id} component="a" href={`#${section.id}`}>
                    <ListItemText primary={section.title} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Content */}
          <Grid item xs={12} md={9}>
            {sections.map((section) => (
              <Box key={section.id} id={section.id} sx={{ mb: 4 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {section.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {section.content}
                </Typography>
                <Accordion sx={{ mt: 2, boxShadow: "none", border: "1px solid #ddd" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" fontWeight="medium">
                      More Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="textSecondary">
                      {section.content}
                    </Typography>
                  {
                    section?.sectionsList?.map((item, index) => (
                      <div>
                        <h3>{index+1}. {item?.title}</h3>
                    <ul>
                      {
                        item?.details?.map((detail, index) => (
                          <li>{detail}</li>
                        ))
                      }
                    </ul>
                      </div>
                    ))
                  }
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;

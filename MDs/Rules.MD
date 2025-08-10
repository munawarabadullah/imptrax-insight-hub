Universal Instructions always follow these rules.
# Development Instructions
Read \MDs\Brand.MD File to know the about the Band. 
Read \MDs\Product.MD file to understand what the overall purpose of this development. 
Read \MDs\Project.MD file to Understand the current scope of the project. 
Read \MDs\ContentETL.MD file to understand the content inspiration process and rebranding process. 
## Overview
This document outlines the comprehensive guidelines for developing and maintaining the Brand website. Follow these instructions carefully to ensure consistency, quality, and brand alignment.
## Development Workflow
### 1. Plan First
- Analyze requirements thoroughly
- Review existing BRAND design patterns and components
- Create a clear implementation strategy
- Identify potential challenges and solutions
- Document the approach before coding
### 2. Execute
- Follow BRAND brand guidelines and design theme
- Implement features with clean, maintainable code
- Use existing components and patterns when possible
- Ensure responsive design across all devices
- Maintain code quality and best practices
### 3. Verify
- Test functionality across different browsers
- Validate responsive design on various screen sizes
- Check for accessibility compliance
- Verify SEO optimization elements
- Ensure brand consistency
## Brand Guidelines
### BRAND Identity
- **Always use "BRAND" as the BRAND name**
- Remove all trademark information from reference materials
- Replace external BRAND names with "BRAND"
- Use BRAND's existing solutions and services when available, read more in Product.MD
- If services don't exist, rewrite elegantly or skip gracefully
### Design Consistency
- **Follow BRAND website design theme exclusively** 
- Never copy external themes unless explicitly mentioned
- Maintain visual consistency across all pages and must meet the guidelines of Design.MD
- Use established color schemes, typography, and spacing
- Preserve the professional, modern aesthetic
- Always add Header Navigation, and Footer unless explicitly asked not to

### CTA - Contact-Us Rules

If the Contact-Us page doesn’t exist, make one.
Here are the comprehensive rules for all Call to Action (CTA) buttons and the requirements for the contact-us page.

Part 1: CTA Button Rules
All CTA buttons across the entire website must adhere to the following rules. The single, required action for every CTA button is to direct users to the "Contact Our Team" section of the /contact-us page.
Standard Target URL: All CTA button href attributes must point to the following specific anchor link: /contact-us#contact-our-team. This ensures users are taken directly to the contact form.
Design & Aesthetics:
Visual Distinction: All CTAs must be visually prominent and stand out from surrounding elements. Use the brand's primary accent color to draw attention.
Size: Buttons should be large enough to be easily clicked or tapped on all devices, especially mobile. A minimum height of 48px is required.
States: Implement clear visual feedback for different states:
Default: The standard button appearance.
Hover: A subtle change in color or a slight animation when a user's cursor is over the button.
Active/Press: A noticeable change when the user clicks or taps.
Copy & Text:
Action-Oriented: The button text must be an imperative verb phrase. Examples include "Get in Touch," "Schedule A Consultation," or "Contact Us Now."
Concise: Keep the text short and to the point, typically no more than four words.
Benefit-Driven: The text should hint at the value the user will receive by clicking, such as "Start Your Project."
Placement:
Primary Placement: Place a single, dominant CTA in the hero section or the main banner of every page.
Secondary Placement: Integrate CTAs logically at the end of key content sections, such as after a product feature list, a case study, or a blog post.
Persistent Placement: Include a CTA in the website's main navigation bar and footer for easy access from any page.

Part 2: Contact-Us Page & Form
The first step is to create the /contact-us page and build the "Contact Our Team" section as specified below. This is the destination for all website CTAs.

Only use appropriate CTA button depend on the project and page you are working on, but avoid using “DEMO”, “Download”
Page Creation: Create a new page with the slug /contact-us.
Section ID: Create a dedicated section on this page with the unique HTML ID contact-our-team. This is critical for the anchor links to function correctly.
Header: The section must have a clear heading, such as "Contact Our Team" or "Get in Touch."
Introduction: Include a brief sentence or two of inviting text before the form, for example, "Ready to start a project? Fill out the form below to connect with our team."
Standard Input Fields: Implement the following form fields.
Name: Two text fields for First Name and Last Name.
Email: A text field for Email Address. This field must be validated for a correct email format.
Company: An optional text field for Company Name.
Subject: A text field or dropdown menu for Subject or Reason for Inquiry.
Message: A multi-line text area for the user's detailed message.
Submission Button:
Create a dedicated submission button for the form.


The button text should be explicit, such as "Send Message" or "Submit."

Part 3: Case Study CTA Rules
If using case studies, create a separate case-study page and send all buttons related to case studies there.
Case Study Page: Create a page with the slug /case-study. This page will house all case studies.
CTA Button Target: All buttons that are meant to show or explore a case study must have an href attribute pointing to /case-study.
Button Copy: Use clear, action-oriented text that specifically mentions the case study, such as "Read the Case Study," "View Our Success Stories," or "Explore Case Studies."


## Content Guidelines

### Reference Materials
- Reference URLs are for inspiration and guidance only
- **Rewrite content with elegance and style**
- Adapt concepts to fit BRAND's brand voice
- Ensure originality while maintaining quality
- Focus on BRAND's unique value propositions

### Content Quality
- Write clear, professional, and engaging copy
- Maintain consistent tone and voice
- Ensure technical accuracy
- Use industry-appropriate terminology
- Keep content concise yet comprehensive

## SEO Optimization Requirements

### Every Page Must Include:

#### Meta Elements
- **SEO Optimized Title**: Unique, descriptive, 50-60 characters
- **Meta Description**: Compelling summary, 150-160 characters
- **Brief**: Concise page summary for internal use

#### Content Structure
- **H1 Tag**: Single, primary heading per page
- **H2 Tags**: Section headings for main content areas
- **H3 Tags**: Subsection headings for detailed content
- Proper heading hierarchy (H1 > H2 > H3)
- Semantic HTML structure

#### Additional SEO Elements
- Alt text for all images
- Descriptive URLs
- Internal linking strategy
- Schema markup where applicable
- Mobile-friendly design
- Fast loading times

## Documentation Requirements

### Documentation Standards
- Clear, structured formatting
- Chronological organization
- Detailed explanations of changes
- Links to relevant files and resources
- Regular updates and maintenance

## Quality Assurance

### Before Deployment
- [ ] Brand consistency verified
- [ ] SEO elements implemented
- [ ] Responsive design tested
- [ ] Content quality reviewed
- [ ] Code quality standards met
- [ ] Documentation updated
- [ ] Cross-browser compatibility checked

### Clarification Process
- **If there are any questions, please clarify immediately**
- Don't make assumptions about requirements
- Seek guidance on brand-related decisions
- Confirm technical specifications
- Validate content direction

## Technical Standards

### Code Quality
- Follow TypeScript/React best practices
- Use existing component library
- Maintain clean, readable code
- Implement proper error handling
- Ensure accessibility standards

### Performance
- Optimize images and assets
- Minimize bundle sizes
- Implement lazy loading where appropriate
- Use efficient rendering patterns
- Monitor Core Web Vitals

## Maintenance

### Regular Tasks
- Update dependencies safely
- Monitor performance metrics
- Review and update SEO elements
- Maintain documentation currency
- Test functionality regularly

### Version Control
- Use descriptive commit messages
- Follow branching strategies
- Document significant changes
- Maintain clean git history

---

**Remember**: These instructions are designed to maintain BRAND's professional standards and brand integrity. When in doubt, prioritize quality, consistency, and user experience.




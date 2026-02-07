# Specification

## Summary
**Goal:** Remove Facebook from all “Follow Us” sections and remove Email as a contact method from the Contact page and footer.

**Planned changes:**
- Update `frontend/src/pages/ContactPage.tsx` to remove the Email contact UI (icon/label/mailto) and remove the Facebook item from the social “Follow Us” section while keeping Instagram unchanged.
- Update `frontend/src/components/layout/Footer.tsx` to remove the email address/mailto link from the contact area (keep phone/tel link) and remove the Facebook link/icon from the footer “Follow Us” section while keeping Instagram unchanged.
- Perform minimal TypeScript/import/constant cleanups to prevent unused imports/references and ensure the frontend builds and runs without errors.

**User-visible outcome:** The Contact page and footer no longer show any Email contact option or Facebook social link; phone/WhatsApp and Instagram remain available as before.

import { Router } from "express";
const router = Router();

const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

router.get("/", (req, res) => {
    res.render("pages/home", 
        { title: "Home", nav });
});

router.get("/about", (req, res) => {
    res.render("pages/about", 
        { title: "About", nav });
});

router.get("/projects", (req, res) => {
    res.render("pages/projects", 
        { title: "Projects", nav });
});

router.get("/contact", (req, res) => {
    const {name, email, message, honeypot } = req.body || {};
    const ok = !honeypot
    res.render("pages/contact", 
        { title: "Contact", nav, sent : ok, name, email, message });
});

export default router;
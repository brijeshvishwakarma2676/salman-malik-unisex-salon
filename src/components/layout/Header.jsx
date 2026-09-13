import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "@/components/primitives/Container";
import Button from "@/components/common/Button";
import MobileMenu from "./MobileMenu";
import { primaryNav } from "@/data/nav";
import { salon } from "@/data/salon";
import { telHref } from "@/lib/format";
import { cn } from "@/lib/cn";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="texture-weave sticky top-0 z-40 bg-surface-dark text-inverse">
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="font-display text-lg font-semibold tracking-tight">
          Salman Malik
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-body transition-colors duration-200",
                  isActive
                    ? "text-inverse font-medium"
                    : "text-inverse/70 hover:text-inverse",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={telHref(salon.phone.tel)}
            variant="secondary"
            size="sm"
            className="border-inverse/30 text-inverse hover:border-inverse/60"
          >
            Call {salon.phone.display}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center rounded-control border border-inverse/20 text-inverse md:hidden focus-visible:outline-2 active:bg-inverse/10 cursor-pointer"
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </Container>

      {menuOpen && (
        <MobileMenu id="mobile-menu" onClose={() => setMenuOpen(false)} />
      )}
    </header>
  );
}

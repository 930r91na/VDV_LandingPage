import { useState } from 'react'
import Navigation from './Navigation'
import HeroContent from './HeroContent'


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
        <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <HeroContent />
    </>
  );
}

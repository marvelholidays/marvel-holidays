import React, { useState } from 'react';
import '../components/home/Home.css';
import HeroSlider from '../components/home/HeroSlider';
import HandpickedPackages from '../components/home/HandpickedPackages';
import Reviews from '../components/home/Reviews';
import InstagramReels from '../components/home/InstagramReels';
import HomeFooter from '../components/home/HomeFooter';
import PackageDrawer from '../components/PackageDrawer';

export default function Home() {
  const [selectedDrawerPkg, setSelectedDrawerPkg] = useState(null);

  return (
    <main className="marvel-home">
      <HeroSlider />
      <HandpickedPackages onSelectPackage={setSelectedDrawerPkg} />
      <Reviews />
      <InstagramReels />
      <HomeFooter />
      <PackageDrawer
        packageData={selectedDrawerPkg}
        onClose={() => setSelectedDrawerPkg(null)}
      />
    </main>
  );
}

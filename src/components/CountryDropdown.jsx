import React, { useState, useRef, useEffect } from 'react';
import './CountryDropdown.css';

const countryList = [
    "AFGHANISTAN",
    "ALBANIA",
    "ALGERIA",
    "AMERICAN SAMOA",
    "ANDORRA",
    "ANGOLA",
    "ANTIGUA AND BARBUDA",
    "ARGENTINA",
    "ARMENIA",
    "ARUBA",
    "AUSTRALIA",
    "AUSTRIA",
    "AZERBAIJAN",
    "BAHAMAS",
    "BAHRAIN",
    "BANGLADESH",
    "BARBADOS",
    "BELARUS",
    "BELGIUM",
    "BELIZE",
    "BENIN",
    "BERMUDA",
    "BHUTAN",
    "BOLIVIA",
    "BOSNIA AND HERZEGOVINA",
    "BOTSWANA",
    "BRAZIL",
    "BRUNEI",
    "BULGARIA",
    "BURKINA FASO",
    "BURUNDI",
    "CAMBODIA",
    "CAMEROON",
    "CANADA",
    "CAPE VERDE",
    "CENTRAL AFRICAN REPUBLIC",
    "CHAD",
    "CHILE",
    "CHINA",
    "CHRISTMAS ISLAND",
    "COCOS ISLANDS",
    "COLOMBIA",
    "COMOROS",
    "CONGO (DRC)",
    "COSTA RICA",
    "COTE D'IVOIRE",
    "CROATIA",
    "CUBA",
    "CYPRUS",
    "CZECH REPUBLIC",
    "DENMARK",
    "DJIBOUTI",
    "DOMINICA",
    "DOMINICAN REPUBLIC",
    "DUBAI",
    "ECUADOR",
    "EGYPT",
    "EL SALVADOR",
    "EQUATORIAL GUINEA",
    "ERITREA",
    "ESTONIA",
    "ETHIOPIA",
    "FEDERATED STATES OF MICRONESIA",
    "FIJI",
    "FINLAND",
    "FRANCE",
    "FRENCH GUIANA",
    "GABON",
    "GAMBIA",
    "GEORGIA",
    "GERMANY",
    "GHANA",
    "GREECE",
    "GRENADA",
    "GUADELOUPE",
    "GUATEMALA",
    "GUINEA",
    "GUYANA",
    "HAITI",
    "HOLY SEE (VATICAN CITY STATE)",
    "HONDURAS",
    "HONG KONG",
    "HUNGARY",
    "ICELAND",
    "INDONESIA",
    "IRAQ",
    "ITALY",
    "JAPAN",
    "KAZAKHSTAN",
    "KENYA",
    "KUWAIT",
    "KYRGYZSTAN",
    "LAOS",
    "LESOTHO",
    "LIECHTENSTEIN",
    "LITHUANIA",
    "LUXEMBOURG",
    "MACEDONIA",
    "MADAGASCAR",
    "MALAWI",
    "MALAYSIA",
    "MALI",
    "MALTA",
    "MAURITANIA",
    "MAURITIUS",
    "MEXICO",
    "MOLDOVA",
    "MONACO",
    "MOROCCO",
    "MOZAMBIQUE",
    "MYANMAR",
    "NAMIBIA",
    "NAURU",
    "NEPAL",
    "NETHERLANDS",
    "NEW ZEALAND",
    "NICARAGUA",
    "NIGER",
    "NIGERIA",
    "NORTH KOREA",
    "NORWAY",
    "OMAN",
    "PAKISTAN",
    "PANAMA",
    "PAPUA NEW GUINEA",
    "PARAGUAY",
    "PERU",
    "PHILIPPINES",
    "POLAND",
    "PORTUGAL",
    "PUERTO RICO",
    "QATAR",
    "ROMANIA",
    "RUSSIAN FEDERATION",
    "RWANDA",
    "SAINT KITTS AND NEVIS",
    "SAINT LUCIA",
    "SAINT VINCENT AND THE GRENADINES",
    "SAMOA",
    "SAN MARINO",
    "SAO TOME AND PRINCIPE",
    "SAUDI ARABIA",
    "SCHENGEN",
    "SENEGAL",
    "SERBIA",
    "SEYCHELLES",
    "SIERRA LEONE",
    "SINGAPORE",
    "SLOVAKIA",
    "SLOVENIA",
    "SOLOMON ISLANDS",
    "SOMALIA",
    "SOUTH AFRICA",
    "SOUTH GEORGIA AND SOUTH S.S.",
    "SOUTH KOREA",
    "SOUTH SUDAN",
    "SPAIN",
    "SRI LANKA",
    "SUDAN",
    "SURINAME",
    "SWEDEN",
    "SWITZERLAND",
    "TAIWAN",
    "TAJIKISTAN",
    "TANZANIA",
    "THAILAND",
    "THE MALDIVES",
    "TIMOR LESTE",
    "TOGO",
    "TONGA",
    "TRINIDAD AND TOBAGO",
    "TUNISIA",
    "TURKEY",
    "TURKMENISTAN",
    "UGANDA",
    "UKRAINE",
    "UNITED KINGDOM",
    "UNITED STATES",
    "URUGUAY",
    "UZBEKISTAN",
    "VANUATU",
    "VENEZUELA",
    "VIETNAM",
    "ZAMBIA",
    "ZIMBABWE"
];
export default function CountryDropdown({ onSelectCountry }) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const filteredCountries = countryList.filter((country) =>
        country.toLowerCase().includes(query.toLowerCase())
    );

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (country) => {
        setQuery(country);
        setIsOpen(false);
        if (onSelectCountry) {
            onSelectCountry(country);
        }
    };

    return (
        <div className="country-search-wrapper" ref={wrapperRef}>
            <div className="country-search-input-container">
                <span className="country-search-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                </span>

                <input
                    type="text"
                    className="country-search-input"
                    placeholder="Search for a country"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                />

                <button
                    type="button"
                    className="country-search-btn"
                    onClick={() => {
                        if (query && onSelectCountry) onSelectCountry(query);
                    }}
                    aria-label="Search"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <ul className="country-dropdown-menu">
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country, index) => (
                            <li
                                key={index}
                                className={`country-dropdown-item ${query.toUpperCase() === country ? 'selected' : ''}`}
                                onClick={() => handleSelect(country)}
                            >
                                {country}
                            </li>
                        ))
                    ) : (
                        <li className="country-dropdown-empty">No matching countries found</li>
                    )}
                </ul>
            )}
        </div>
    );
}
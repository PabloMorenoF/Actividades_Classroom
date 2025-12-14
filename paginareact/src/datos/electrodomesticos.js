const electrodomesticos = [
  {
    id: 1,
    nombre: "Refrigerador Smart",
    descripcion:
      "Refrigerador inteligente con conectividad WiFi y control desde tu teléfono.",
    precio: "$8,499.00 MXN",
    imagen:
      "https://imgs.search.brave.com/3npT1WqmcrWxNDBVjvP79BSR2B1Z3srzNoQnADklQjA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMy9SZWZy/aWdlcmF0b3ItUE5H/LUltYWdlLUJhY2tn/cm91bmQucG5n",
    alt: "Refrigerador Smart",
  },
  {
    id: 2,
    nombre: "Lavadora Automática",
    descripcion:
      "Lavadora de carga frontal con 12 ciclos de lavado y eficiencia energética.",
    precio: "$6,299.00 MXN",
    imagen:
      "https://imgs.search.brave.com/TZudp_ViJaGI1n_gPlNDZOwoFxmnroqyM_hSH_QDBSA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bmljZXBuZy5jb20v/cG5nL2RldGFpbC80/MTItNDEyMjY1Ml9s/YXZhZG9yYS1wbmct/aW1hZ2VuZXMtZGUt/dW5hLWxhdmFkb3Jh/LWF1dG9tYXRpY2Eu/cG5n",
    alt: "Lavadora Automática",
  },
  {
    id: 3,
    nombre: "Microondas Digital",
    descripcion:
      "Microondas digital con sensor de temperatura y 20 programas automáticos.",
    precio: "$1,999.00 MXN",
    imagen:
      "https://imgs.search.brave.com/KOPgAZu5a9laVHZ9SIo2wjdgyS15UD-WVFG9XBKyE1w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjkv/NzMwLzEwOC9zbWFs/bC9zbGVlay1zdGFp/bmxlc3Mtc3RlZWwt/bWljcm93YXZlLW92/ZW4td2l0aC1kaWdp/dGFsLWRpc3BsYXkt/YW5kLWNvbnRyb2wt/ZGlhbC1mcmVlLXBu/Zy5wbmc",
    alt: "Microondas Digital",
  },
  {
    id: 4,
    nombre: "Licuadora Profesional",
    descripcion:
      "Licuadora de 1000W con vaso de vidrio resistente y 5 velocidades.",
    precio: "$1,499.00 MXN",
    imagen:
      "https://imgs.search.brave.com/hhfijTC-LL4pROBX7xRZDIVu7IeKKA3VwAybsB6urHA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDcv/ODI2LzM1OS9zbWFs/bC9wb3J0YWJsZS1i/bGVuZGVyLWFnYWlu/c3QtdHJhbnNwYXJl/bnQtYmFja2dyb3Vu/ZC1mcmVlLXBuZy5w/bmc",
    alt: "Licuadora Profesional",
  },
  {
    id: 5,
    nombre: "Horno Eléctrico",
    descripcion:
      "Horno eléctrico de 2000W con temporizador y control de temperatura.",
    precio: "$2,899.00 MXN",
    imagen:
      "https://imgs.search.brave.com/1Ardf97hgsPw_0exyj81vN37LN8DsPFBJ-DkKqnG1TQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NjY5LzAxOS9zbWFs/bC9ibGFjay1lbGVj/dHJpYy1vdmVuLXdp/dGgtb3Blbi1kb29y/LWFuZC10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLXBuZy5wbmc",
    alt: "Horno Eléctrico",
  },
  {
    id: 6,
    nombre: "Secadora Eléctrica",
    descripcion:
      "Secadora de ropa con 8 ciclos de secado y sensor de humedad.",
    precio: "$5,999.00 MXN",
    imagen:
      "https://imgs.search.brave.com/yZA4W5XKL4q608GEoccpyuethwgy_wYONODmujpfM6Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvQWFmZDU4/MTg1OTg2NjQ5YWU4/YTYwZGQ0ZDM3Yzdh/ZTM4eC5wbmdfMzAw/eDMwMC5qcGc",
    alt: "Secadora Eléctrica",
  },
  {
    id: 7,
    nombre: "Cafetera Automática",
    descripcion:
      "Cafetera programable con capacidad para 12 tazas y mantenimiento de temperatura.",
    precio: "$899.00 MXN",
    imagen:
      "https://imgs.search.brave.com/pGg2AB7KV77HNRaWhqOS-XUKRC288aO5i7S84uFiFsg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/NTU0Lzc0OC9zbWFs/bC9jb2ZmZWUtbWFj/aGluZS13aXRoLWN1/cC11bmRlcm5lYXRo/LXNwb3V0LWlzb2xh/dGVkLW9uLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtZnJlZS1w/bmcucG5n",
    alt: "Cafetera Automática",
  },
  {
    id: 8,
    nombre: "Aspiradora Inalámbrica",
    descripcion:
      "Aspiradora sin cable con 60 minutos de autonomía y filtro HEPA.",
    precio: "$3,499.00 MXN",
    imagen:
      "https://imgs.search.brave.com/sC0waD-GWBtPLx_MW7QWprO55HlrGWJIG7pwji7FKqA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMS9WYWN1/dW0tQ2xlYW5lci1Q/TkctUGhvdG8ucG5n",
    alt: "Aspiradora Inalámbrica",
  },
  {
    id: 9,
    nombre: "Aire Acondicionado",
    descripcion:
      "Aire acondicionado inverter de 12000 BTU con WiFi y bajo consumo energético.",
    precio: "$7,999.00 MXN",
    imagen:
      "https://imgs.search.brave.com/kUvHA3bXvaYb4vNHAthTCY34TJsTCS0Gtqfp8_gH8ps/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/MDg1LzQ5Ni9zbWFs/bC93YWxsLW1vdW50/ZWQtYWlyLWNvbmRp/dGlvbmVyLWZyZWUt/cG5nLnBuZw",
    alt: "Aire Acondicionado",
  },
];

export default electrodomesticos;

const users = [
  {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@gmail.com",
    password: "user1",
    img_url:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/310.jpg",
    id: "1",
    baby_name: "Jay",
    birth_date: "12-08-2023",
  },
  {
    name: "Jane Smith",
    username: "janesmith",
    email: "janesmith@gmail.com",
    password: "user2",
    img_url:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg",
    id: "2",
    baby_name: "Juna",
    birth_date: "19-09-2023",
  },
  {
    name: "Bob Brown",
    username: "bobbrown",
    email: "bobbrown@gmail.com",
    password: "user3",
    img_url:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/649.jpg",
    id: "3",
    baby_name: "Marley",
    birth_date: "23-09-2023",
  },
];

const babyDatas = [
  {
    weight: 0,
    height: 29,
    head_circumference: 9,
    growth_date: "01-10-2023",
    id: "1",
    userId: "1",
  },
  {
    weight: "44",
    height: "44",
    head_circumference: "44",
    growth_date: "12-10-2023",
    id: "3",
    userId: "2",
  },
  {
    weight: 26,
    height: 76,
    head_circumference: 58,
    growth_date: "08-10-2023",
    id: "4",
    userId: "1",
  },
  {
    weight: "34",
    height: "20.89",
    head_circumference: "54.12",
    growth_date: "26-10-2023",
    id: "6",
    userId: "2",
  },
];


const immnunizationList = [
  {
    id: "1", // Object ID
    nama_vaksin: "Polio 0", // String
    jadwal: "saat lahir", // String
    manfaat: [
      ['Untuk semua bayi baru lahir'],
      ['Dapat diberikan untuk Anak usia < 1 tahun'],
      ['Mencegah infeksi virus polio']
    ], // Array
    catatan: [
      ['Jika bayi lahir di rumah segera diberikan, sedangkan bila di fasilitas kesehatan diberikan saat bayi pulang.'],
      ['Sebaiknya paling sedikit 2 dosis IPV (polio suntik) sebelum berusia 1 tahun.'],
    ], // Array
    tanggal_imunisasi: '11-10-2023', // String
    merk_vaksin: 'YAMAHA', // String
    lokasi_vaksin: 'RS Siloam Agora', // String
    lokasi_vaksin: 'ES1232189912731', // String
    status: 0, // Boolean
  }
]

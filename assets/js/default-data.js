const users =
[
  {
    "name": "John Doe",
    "username": "johndoe",
    "email": "johndoe@gmail.com",
    "password": "user1",
    "img_url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/310.jpg",
    "id": "1",
    "baby_name": "Jay",
    "birth_date": "12-08-2023",
    "gender": "male"
    },
    {
    "name": "Jane Smith",
    "username": "janesmith",
    "email": "janesmith@gmail.com",
    "password": "user2",
    "img_url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg",
    "id": "2",
    "baby_name": "Yuna",
    "birth_date": "19-09-2023",
    "gender": "female"
    },
    {
    "name": "Bob Brown",
    "username": "bobbrown",
    "email": "bobbrown@gmail.com",
    "password": "user3",
    "img_url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/649.jpg",
    "id": "3",
    "baby_name": "Marley",
    "birth_date": "23-09-2023",
    "gender": "male"
  }
]

const babyDatas = [
  {
    "weight": 3.7,
    "height": 47,
    "head_circumference": 34,
    "growth_date": "01-09-2023",
    "id": "1",
    "userId": "1"
  },
  {
    "weight": 3.5,
    "height": 52,
    "head_circumference": 34,
    "growth_date": "01-09-2023",
    "id": "2",
    "userId": "2"
  },
  {
    "weight": 3.75,
    "height": 52,
    "head_circumference": 33,
    "growth_date": "01-10-2023",
    "id": "3",
    "userId": "3"
  },
  {
    "weight": 4.5,
    "height": 56,
    "head_circumference": 35,
    "growth_date": "12-10-2023",
    "id": "4",
    "userId": "1"
  },
  {
    "weight": 4.3,
    "height": 58,
    "head_circumference": 35.1,
    "growth_date": "21-10-2023",
    "id": "5",
    "userId": "2"
  }
]

const immunizationList = [
  {
    "nama_vaksin": "Hepatitis B 1",
    "jadwal": "Saat Lahir",
    "manfaat": [
      "Mencegah penyakit Hepatitis B yang bisa menyebabkan kerusakan hati."
    ],
    "catatan": [
      "Vaksin Hepatitis B monovalen diberikan segera setelah bayi lahir sebelum usianya 24 jam, diawali pemberian vitamin K min. 30 menit sebelumnya.",
      "Bayi dengan ibu penderita hepatitis B, selain imunisasi hepatitis B juga diberikan immuniglobulin (HBlg) disuntik di paha yang berbeda.",
      "Untuk bayi prematur/bertabah lahir kurang dari 2000 g, vaksin diberikan setelah usia 1 bulan atau lebih."
    ],
    "tanggal_imunisasi": "10-10-2023",
    "merk_vaksin": "Engerix B",
    "lokasi_vaksin": "Klinik Bhakti Ibu",
    "nomor_batch": "3650121",
    "status": true,
    "id": "1"
  },
  {
    "nama_vaksin": "Polio 0",
    "jadwal": "Saat Lahir",
    "manfaat": [
      "Untuk semua bayi baru lahir berusia kurang dari 1 tahun dan dapat mencegah infeksi virus polio."
    ],
    "catatan": [
      "Jika bayi baru lahir dirumah segera diberikan, sedangkan bila di fasilitas kesehatan diberikan saat bayi pulang.",
      "Sebaiknya paling sedikit 2 dosis IPV (polio suntik) sebelum berusia 1 tahun."
    ],
    "tanggal_imunisasi": "30-10-2023",
    "merk_vaksin": "Polio Oral (OPV)",
    "lokasi_vaksin": "Klinik Bhakti Ibu",
    "nomor_batch": "2041121",
    "status": false,
    "id": "2"
  },
  {
    "nama_vaksin": "BCG",
    "jadwal": "Saat Lahir",
    "manfaat": [
      "Untuk bayi usia kurang dari 3 bulan yang belum mendapat imunisasi BCG.",
      "Bayi baru lahir yang kontak erat dengan penderita TB aktif dan mencegah Tuberkulosis yang berat."
    ],
    "catatan": [
      "Pemberian vaksin BCG sebaiknya diberikan segera setelah lahir atau sesegera mungkin sebelum bayi berusia 1 bulan.",
      "Bila berusia 3 bulan atau lebih, hanya diberikan jika uji tuberkulin negatif."
    ],
    "tanggal_imunisasi": "25-11-2023",
    "merk_vaksin": "BCG",
    "lokasi_vaksin": "Klinik Bhakti Ibu",
    "nomor_batch": "07100120",
    "status": false,
    "id": "3"
  },
  {
    "nama_vaksin": "Hepatitis B 2",
    "jadwal": "59 Hari",
    "manfaat": [
      "Mencegah penyakit Hepatitis B yang bisa menyebabkan kerusakan hati."
    ],
    "catatan": [
      "Untuk semua bayi baru lahir dengan berat lahir minimal 2000 g. Anak yang belum pernah mendapat imunisasi hepatitis B.",
      "Pasien cuci darah/hemodialisis. Pasien yang membutuhkan transfusi berulang. Orang yang beresiko tertular hepatitis B dari pekerjaan."
    ],
    "tanggal_imunisasi": "10-01-2024",
    "merk_vaksin": "Eufax B",
    "lokasi_vaksin": "Klinik Bhakti Ibu",
    "nomor_batch": "3666222",
    "status": false,
    "id": "4"
  },
  {
    "nama_vaksin": "Polio 1",
    "jadwal": "59 Hari",
    "manfaat": [
      "Untuk semua bayi baru lahir berusia kurang dari satu tahun dan dapat mencegah infeksi virus polio."
    ],
    "catatan": [
      "Jika bayi lahir dirumah segera diberikan, sedangkan bila di fasilitas kesehatan diberikan saat bayi pulang.",
      "Sebaiknya paling sedikit 2 dosis IPV (polio suntik) sebelum berusia 1 tahun."
    ],
    "tanggal_imunisasi": "30-01-2024",
    "merk_vaksin": "Imovax Polio",
    "lokasi_vaksin": "Klinik Bhakti Ibu",
    "nomor_batch": "2224120",
    "status": false,
    "id": "5"
  }
];

// [
//   {
//    "nama_vaksin": "nama_vaksin 1",
//    "jadwal": "jadwal 1",
//    "manfaat": ["HALO"],
//    "catatan": ["HALO"],
//    "tanggal_imunisasi": "tanggal_imunisasi 1",
//    "merk_vaksin": "merk_vaksin 1",
//    "lokasi_vaksin": "lokasi_vaksin 1",
//    "nomer_batch": "nomer_batch 1",
//    "status": false,
//    "id": "1"
//   },
//   {
//    "nama_vaksin": "nama_vaksin 2",
//    "jadwal": "jadwal 2",
//    "manfaat": ["HALO"],
//    "catatan": ["HALO"],
//    "tanggal_imunisasi": "tanggal_imunisasi 2",
//    "merk_vaksin": "merk_vaksin 2",
//    "lokasi_vaksin": "lokasi_vaksin 2",
//    "nomer_batch": "nomer_batch 2",
//    "status": false,
//    "id": "2"
//   }
// ]

// With LK
// female: [
//   {
//     ageInMonth: 0,
//     bbu: { min: 2.8, median: 3.2, plus: 3.7 },
//     tbu: { min: 47.3, median: 49.1, plus: 51 },
//     lk: 33.9
//   },
//   {
//     ageInMonth: 1,
//     bbu: { min: 3.6, median: 4.2, plus: 4.8 },
//     tbu: { min: 51.7, median: 53.7, plus: 55.6 },
//     lk: 36.5
//   },
//   {
//     ageInMonth: 2,
//     bbu: { min: 4.5, median: 5.1, plus: 5.8 },
//     tbu: { min: 55, median: 57.1, plus: 59.1 },
//     lk: 38.3
//   },
//   {
//     ageInMonth: 3,
//     bbu: { min: 5.2, median: 5.8, plus: 6.6 },
//     tbu: { min: 57.7, median: 59.8, plus: 61.9 },
//     lk: 39.5
//   },
//   {
//     ageInMonth: 4,
//     bbu: { min: 5.7, median: 6.4, plus: 7.3 },
//     tbu: { min: 59.9, median: 62.1, plus: 64.3 },
//     lk: 40.6
//   },
//   {
//     ageInMonth: 5,
//     bbu: { min: 6.1, median: 6.9, plus: 7.8 },
//     tbu: { min: 61.8, median: 64, plus: 66.2 },
//     lk: 41.5
//   },
//   {
//     ageInMonth: 6,
//     bbu: { min: 6.5, median: 7.3, plus: 8.2 },
//     tbu: { min: 63.5, median: 65.7, plus: 68 },
//     lk: 42.2
//   },
//   {
//     ageInMonth: 7,
//     bbu: { min: 6.8, median: 7.6, plus: 8.6 },
//     tbu: { min: 65, median: 67.3, plus: 69.6 },
//     lk: 42.8
//   },
//   {
//     ageInMonth: 8,
//     bbu: { min: 7, median: 7.9, plus: 9 },
//     tbu: { min: 66.4, median: 68.7, plus: 71.1 },
//     lk: 43.4
//   },
//   {
//     ageInMonth: 9,
//     bbu: { min: 7.3, median: 8.2, plus: 9.3 },
//     tbu: { min: 67.7, median: 70.1, plus: 72.6 },
//     lk: 43.8
//   },
//   {
//     ageInMonth: 10,
//     bbu: { min: 7.5, median: 8.5, plus: 9.6 },
//     tbu: { min: 69, median: 71.5, plus: 73.9 },
//     lk: 44.2
//   },
//   {
//     ageInMonth: 11,
//     bbu: { min: 7.7, median: 8.7, plus: 9.9 },
//     tbu: { min: 70.3, median: 72.8, plus: 75.3 },
//     lk: 44.6
//   },
//   {
//     ageInMonth: 12,
//     bbu: { min: 7.9, median: 8.9, plus: 10.1 },
//     tbu: { min: 71.4, median: 74, plus: 76.6 },
//     lk: 44.9
//   },
//   {
//     ageInMonth: 13,
//     bbu: { min: 8.1, median: 9.2, plus: 10.4 },
//     tbu: { min: 72.6, median: 75.2, plus: 77.8 },
//     lk: 45.2
//   },
//   {
//     ageInMonth: 14,
//     bbu: { min: 8.3, median: 9.4, plus: 10.6 },
//     tbu: { min: 73.7, median: 76.4, plus: 79.1 },
//     lk: 45.4
//   },
//   {
//     ageInMonth: 15,
//     bbu: { min: 8.5, median: 9.6, plus: 10.9 },
//     tbu: { min: 74.8, median: 77.5, plus: 80.2 },
//     lk: 45.7
//   },
//   {
//     ageInMonth: 16,
//     bbu: { min: 8.7, median: 9.8, plus: 11.1 },
//     tbu: { min: 75.8, median: 78.6, plus: 81.4 },
//     lk: 45.9
//   },
//   {
//     ageInMonth: 17,
//     bbu: { min: 8.9, median: 10, plus: 11.4 },
//     tbu: { min: 76.8, median: 79.7, plus: 82.5 },
//     lk: 46.1
//   },
//   {
//     ageInMonth: 18,
//     bbu: { min: 9.1, median: 10.2, plus: 11.6 },
//     tbu: { min: 77.8, median: 80.7, plus: 83.6 },
//     lk: 46.2
//   },
//   {
//     ageInMonth: 19,
//     bbu: { min: 9.2, median: 10.4, plus: 11.8 },
//     tbu: { min: 78.8, median: 81.7, plus: 84.7 },
//     lk: 46.4
//   },
//   {
//     ageInMonth: 20,
//     bbu: { min: 9.4, median: 10.6, plus: 12.1 },
//     tbu: { min: 79.7, median: 82.7, plus: 85.7 },
//     lk: 46.6
//   },
//   {
//     ageInMonth: 21,
//     bbu: { min: 9.6, median: 10.9, plus: 12.3 },
//     tbu: { min: 80.6, median: 83.7, plus: 86.7 },
//     lk: 46.7
//   },
//   {
//     ageInMonth: 22,
//     bbu: { min: 9.8, median: 11.1, plus: 12.5 },
//     tbu: { min: 81.5, median: 84.6, plus: 87.7 },
//     lk: 46.9
//   },
//   {
//     ageInMonth: 23,
//     bbu: { min: 10, median: 11.3, plus: 12.8 },
//     tbu: { min: 82.3, median: 85.5, plus: 88.7 },
//     lk: 47
//   },
//   {
//     ageInMonth: 24,
//     bbu: { min: 10.2, median: 11.5, plus: 13 },
//     tbu: { min: 83.2, median: 86.4, plus: 89.6 },
//     lk: 47.2
//   }
// ],
// male: [
//   {
//     ageInMonth: 0,
//     bbu: { min: 2.9, median: 3.3, plus: 4.4 },
//     tbu: { min: 48.0, median: 49.9, plus: 51.8 },
//     lk: 34.5
//   },
//   {
//     ageInMonth: 1,
//     bbu: { min: 3.9, median: 4.5, plus: 5.1 },
//     tbu: { min: 52.8, median: 52.7, plus: 56.7 },
//     lk: 37.3
//   },
//   {
//     ageInMonth: 2,
//     bbu: { min: 4.9, median: 5.6, plus: 6.3 },
//     tbu: { min: 56.4, median: 58.4, plus: 60.4 },
//     lk: 39.1
//   },
//   {
//     ageInMonth: 3,
//     bbu: { min: 5.7, median: 6.4, plus: 7.2 },
//     tbu: { min: 59.4, median: 61.4, plus: 63.5 },
//     lk: 40.5
//   },
//   {
//     ageInMonth: 4,
//     bbu: { min: 6.2, median: 7.0, plus: 7.8 },
//     tbu: { min: 61.8, median: 63.9, plus: 66.0 },
//     lk: 41.6
//   },
//   {
//     ageInMonth: 5,
//     bbu: { min: 6.7, median: 7.5, plus: 8.4 },
//     tbu: { min: 63.8, median: 65.9, plus: 68.0 },
//     lk: 42.6
//   },
//   {
//     ageInMonth: 6,
//     bbu: { min: 6.9, median: 7.9, plus: 8.6 },
//     tbu: { min: 65.5, median: 67.6, plus: 69.8 },
//     lk: 43.3
//   },
//   {
//     ageInMonth: 7,
//     bbu: { min: 7.4, median: 8.3, plus: 9.2 },
//     tbu: { min: 67.0, median: 69.2, plus: 71.3 },
//     lk: 44
//   },
//   {
//     ageInMonth: 8,
//     bbu: { min: 7.7, median: 8.6, plus: 9.6 },
//     tbu: { min: 68.4, median: 70.6, plus: 72.8 },
//     lk: 44.5
//   },
//   {
//     ageInMonth: 9,
//     bbu: { min: 8.0, median: 8.9, plus: 9.9 },
//     tbu: { min: 69.7, median: 72.0, plus: 74.2 },
//     lk: 45
//   },
//   {
//     ageInMonth: 10,
//     bbu: { min: 8.2, median: 9.2, plus: 10.2 },
//     tbu: { min: 71.0, median: 73.3, plus: 75.6 },
//     lk: 45.4
//   },
//   {
//     ageInMonth: 11,
//     bbu: { min: 8.4, median: 9.4, plus: 10.5 },
//     tbu: { min: 72.2, median: 74.5, plus: 76.9 },
//     lk: 45.8
//   },
//   {
//     ageInMonth: 12,
//     bbu: { min: 8.6, median: 9.6, plus: 10.8 },
//     tbu: { min: 73.4, median: 75.7, plus: 78.1 },
//     lk: 46.1
//   },
//   {
//     ageInMonth: 13,
//     bbu: { min: 8.8, median: 9.9, plus: 11.0 },
//     tbu: { min: 74.5, median: 76.9, plus: 79.3 },
//     lk: 46.3
//   },
//   {
//     ageInMonth: 14,
//     bbu: { min: 9.0, median: 10.1, plus: 11.3 },
//     tbu: { min: 75.6, median: 78.0, plus: 80.5 },
//     lk: 46.6
//   },
//   {
//     ageInMonth: 15,
//     bbu: { min: 9.2, median: 10.3, plus: 11.5 },
//     tbu: { min: 76.6, median: 79.1, plus: 81.7 },
//     lk: 46.8
//   },
//   {
//     ageInMonth: 16,
//     bbu: { min: 9.4, median: 10.5, plus: 11.7 },
//     tbu: { min: 77.6, median: 80.2, plus: 82.8 },
//     lk: 47
//   },
//   {
//     ageInMonth: 17,
//     bbu: { min: 9.6, median: 10.7, plus: 12.0 },
//     tbu: { min: 78.6, median: 81.2, plus: 83.9 },
//     lk: 47.2
//   },
//   {
//     ageInMonth: 18,
//     bbu: { min: 9.8, median: 10.9, plus: 12.2},
//     tbu: { min: 79.6, median: 82.3, plus: 85.0 },
//     lk: 47.4
//   },
//   {
//     ageInMonth: 19,
//     bbu: { min: 10.0, median: 11.1, plus: 12.5 },
//     tbu: { min: 80.5, median: 83.2, plus: 86.0 },
//     lk: 47.5
//   },
//   {
//     ageInMonth: 20,
//     bbu: { min: 10.1, median: 11.3, plus: 12.7 },
//     tbu: { min: 81.4, median: 84.2, plus: 87.0 },
//     lk: 47.7
//   },
//   {
//     ageInMonth: 21,
//     bbu: { min: 10.3, median: 11.5, plus: 12.9 },
//     tbu: { min: 82.3, median: 85.1, plus: 88.0 },
//     lk: 47.8
//   },
//   {
//     ageInMonth: 22,
//     bbu: { min: 10.5, median: 11.8, plus: 13.2 },
//     tbu: { min: 83.1, median: 86.0, plus: 89.0 },
//     lk: 48
//   },
//   {
//     ageInMonth: 23,
//     bbu: { min: 10.7, median: 12.0, plus: 13.4 },
//     tbu: { min: 83.9, median: 86.9, plus: 89.9 },
//     lk: 48.1
//   },
//   {
//     ageInMonth: 24,
//     bbu: { min: 10.8, median: 12.2, plus: 13.6 },
//     tbu: { min: 84.8, median: 87.8, plus: 90.9 },
//     lk: 48.3
//   }
// ]
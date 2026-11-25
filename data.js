// =====================================================================
//  DATA UANG KAS
//
//  - Pengunjung web hanya MELIHAT isi file ini. Mereka tidak bisa mengubahnya.
//  - Cara mengubah data:
//      1. Buka web Anda, klik tombol "Admin", masukkan password.
//      2. Tambah / kurangi uang, kelola anggota, dll.
//      3. Klik "Unduh data.js", lalu GANTI file data.js lama di hosting Anda.
//  - Password awal: admin123  (segera ganti lewat Pengaturan di mode Admin)
//  - Data di bawah ini hanya CONTOH. Hapus lewat mode Admin:
//      Pengaturan -> "Kosongkan semua transaksi", lalu ganti nama anggota.
// =====================================================================
window.KAS_DATA = {
  judul: "Uang Kas",
  subjudul: "Catatan kas bersama",
  passwordHash: "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9",
  updatedAt: "2026-11-24T07:50:00.000Z",
  anggota: ["Andi", "Budi", "Citra", "Dewi"],
  transaksi: [
    { id: "c01", tanggal: "2026-10-05", nama: "Andi",  keterangan: "Kas minggu 1", jenis: "masuk",  jumlah: 10000 },
    { id: "c02", tanggal: "2026-10-05", nama: "Budi",  keterangan: "Kas minggu 1", jenis: "masuk",  jumlah: 10000 },
    { id: "c03", tanggal: "2026-10-05", nama: "Citra", keterangan: "Kas minggu 1", jenis: "masuk",  jumlah: 10000 },
    { id: "c04", tanggal: "2026-10-12", nama: "Andi",  keterangan: "Kas minggu 2", jenis: "masuk",  jumlah: 10000 },
    { id: "c05", tanggal: "2026-10-12", nama: "Dewi",  keterangan: "Kas minggu 2", jenis: "masuk",  jumlah: 10000 },
    { id: "c06", tanggal: "2026-10-20", nama: "",      keterangan: "Beli spidol",  jenis: "keluar", jumlah: 15000 },
    { id: "c07", tanggal: "2026-11-02", nama: "Andi",  keterangan: "Kas minggu 1", jenis: "masuk",  jumlah: 10000 },
    { id: "c08", tanggal: "2026-11-02", nama: "Budi",  keterangan: "Kas minggu 1", jenis: "masuk",  jumlah: 10000 },
    { id: "c09", tanggal: "2026-11-02", nama: "Citra", keterangan: "Kas minggu 1", jenis: "masuk",  jumlah: 10000 },
    { id: "c10", tanggal: "2026-11-02", nama: "Dewi",  keterangan: "Kas minggu 1", jenis: "masuk",  jumlah: 10000 },
    { id: "c11", tanggal: "2026-11-10", nama: "",      keterangan: "Beli kapur & penghapus", jenis: "keluar", jumlah: 20000 },
    { id: "c12", tanggal: "2026-11-16", nama: "Andi",  keterangan: "Kas minggu 3", jenis: "masuk",  jumlah: 10000 },
    { id: "c13", tanggal: "2026-11-16", nama: "Citra", keterangan: "Kas minggu 3", jenis: "masuk",  jumlah: 10000 },
    // "bulan" = uang ini untuk bulan apa. Contoh bayar di muka: dibayar November, dihitung untuk Desember.
    { id: "c14", tanggal: "2026-11-16", bulan: "2026-12", nama: "Citra", keterangan: "Bayar di muka", jenis: "masuk", jumlah: 10000 }
  ]
};

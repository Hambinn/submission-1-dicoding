import './App.css'

function App() {
  const biodata = {
    nama: "Ilham Bintang Nurmansyah",
    tanggalLahir: "30/11/2001",
    alamat: "Bandung",
    email: "ilhambintangn@gmail.com",
  };

  const portfolioItems = [
    {
      title: 'Project 1',
      description: 'Project ini merupakan website youtube',
      link: 'https://youtube.com',
    },
    {
      title: 'Project 2',
      description: 'Project ini merupakan website microsoft',
      link: 'https://microsoft.com',
    },
    // Tambahkan lebih banyak item portofolio jika diperlukan
  ];

  return (
    <div className="profile">
      <img src="https://storage.googleapis.com/hambin-submission-1/Pas_Foto_Ilham%20Bintang%20N.jpg" alt="Profile" className="profile-image" />
      <h1>{biodata.nama}</h1>
      <p>Seorang programmer yang sangat keren sekali</p>

      <h2>Biodata</h2>
      <p>Tanggal Lahir: {biodata.tanggalLahir}</p>
      <p>Alamat: {biodata.alamat}</p>
      <p>Email: {biodata.email}</p>

      <h2>Portofolio</h2>
      <ul>
        {portfolioItems.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Lihat Proyek
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

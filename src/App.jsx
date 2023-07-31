import Footer from "./components/Footer";
import Section from "./components/Section";
import Ciwi from "../src/assets/images/ciwi.png";

function App() {
  const navItem = ["Program", "Bidang ilmu", "Tentang edspert"];

  const contents = [
    {
      title: "Programming Laravel",
      desc: "Intensive Bootcamp",
      content: "(Getting started with Laravel 9)",
      program: "Programming Laravel",
      info: "Laravel For Backend Development",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel Prayoga",
      promo: "Rp. 1.200.000",
      price: "Rp. 560.000",
    },
    {
      title: "Flutter",
      desc: "Intensive Bootcamp",
      content: "(Getting started with Flutter)",
      program: "Programming Flutter",
      info: "Getting Started with Flutter",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel Prayoga",
      promo: "Rp. 980.000",
      price: "Rp. 490.000",
    },
    {
      title: "React JS",
      desc: "Intensive Bootcamp",
      content: "(Getting started with react JS)",
      program: "Programming React JS",
      info: "Getting Started with React JS",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel Prayoga",
      promo: "Rp. 1.200.000",
      price: "Rp. 499.000",
    },
    {
      title: "React Native",
      desc: "Intensive Bootcamp",
      content: "(Getting started with react Native)",
      program: "Programming React Native",
      info: "Getting Started with React Native",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel Prayoga",
      promo: "Rp. 1.200.000",
      price: "Rp. 666.000",
    },
    {
      title: "Golang",
      desc: "Intensive Bootcamp",
      content: "(Getting started with golang)",
      program: "Programming Golang",
      info: "Getting Started with Golang",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel Prayoga",
      promo: "Rp. 1.200.000",
      price: "Rp. 560.000",
    },
    {
      title: "Microsoft Excel",
      desc: "Intensive Bootcamp",
      content: "(Getting started with Excel)",
      program: "Programming Excel",
      info: "Getting Started with Excel",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel Prayoga",
      promo: "Rp. 1.200.000",
      price: "Rp. 210.000",
    },
    {
      title: "Data Analytics",
      desc: "Intensive Bootcamp",
      content: "(Getting started with Data Analytics)",
      program: "Programming Data Analytics",
      info: "Getting Started with Data Analytics",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel Prayoga",
      promo: "Rp. 1.200.000",
      price: "Rp. 1.200.000",
    },
    {
      title: "IoT",
      desc: "Intensive Bootcamp",
      content: "(Getting started with IoT)",
      program: "Programming IoT",
      info: "Getting Started with IoT",
      batch: "September 2022",
      mentor: "Wiliam Handayana, Udin Samsudin",
      promo: "Rp. 1.200.000",
      price: "Rp. 920.000",
    },
    {
      title: "Next Js",
      desc: "Intensive Bootcamp",
      content: "(Getting started with Next Js)",
      program: "Programming Next Js",
      info: "Getting Started with Next Js",
      batch: "September 2023",
      mentor: "marsuki pilami, adel Prayogi",
      promo: "Rp. 1.200.000",
      price: "Rp. 500.000",
    },
    {
      title: "Node Js",
      desc: "Intensive Bootcamp",
      content: "(Getting started with Node Js)",
      program: "Programming Node Js",
      info: "Getting Started with Node Js",
      batch: "September 2023",
      mentor: "marsuki pilami, adel Prayogi",
      promo: "Rp. 1.200.000",
      price: "Rp. 690.000",
    },
    {
      title: "HTML",
      desc: "Intensive Bootcamp",
      content: "(Getting started with HTML)",
      program: "Programming HTML",
      info: "Getting Started with HTML",
      batch: "September 2023",
      mentor: "Marsuki pilami, Adel Prayogi",
      promo: "Rp. 1.200.000",
      price: "Rp. 320.000",
    },
    {
      title: "CSS",
      desc: "Intensive Bootcamp",
      content: "(Getting started with CSS)",
      program: "Programming CSS",
      info: "Getting Started with CSS",
      batch: "September 2023",
      mentor: "Firda hanjani, Rudi Firmansyah",
      promo: "Rp. 650.000",
      price: "Rp. 350.000",
    },
  ];

  return (
    <>
      <header className="bg-[#152A46] text-white py-[28px] px-[130px] flex justify-between">
        <h1 className="text-[20px] font-[700px]">LOGO</h1>
        <nav>
          <ul className="m-0 p-0 justify-items-end list-none">
            {navItem.map((item) => (
              <li className="inline-block mr-[10px]" key={item}>
                <a className="text-white " href="#">
                  {item}
                </a>
              </li>
            ))}
            <li className="inline-block">
              <button className="btn-login">Masuk/Daftar</button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="bg-[#152A46] flex text-white py-[150px] px-[120px] row w-100 text-white align-items-center">
        <h2 className="mb-lg-4 text-3xl font-semibold">
          Jadi expert bersama, <br></br>
          edspert.id 
        </h2>
        <p className=" text-center lg:text-left mt-5 max-w-[100%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[80%] 2xl:max-w-[70%]">
          Tingkatkan skill dan pengetahuan bersama para mentor terbaik
          di bidangnya, untuk siapkan karir impian anda.
        </p>
        <div className="col">
          <div
            className="position-absolute"
            style={{ marginLeft: "12rem", right: "12rem", bottom: "4rem" }}
            width="343"
            height="410"
            viewBox="0 0 343 410"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 148V489.504H360.504L0 148Z"
              fill="#235597"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M200 234.879L422.5 234.879L422.5 3.60506e-05L200 234.879Z"
              fill="#FFCD29"
            />
          </div>
          <img
            className="position-absolute"
            style={{
              width: "19rem",
              marginLeft: "17rem",
              right: "14rem",
              bottom: "4rem",
            }}
            src={Ciwi}
            alt="Ciwi"
          />
        </div>
      </div>
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-[20px] h-full">
        {contents.map((item) => (
          <Section
            key={item.title}
            title={item.title}
            content={item.content}
            price={item.price}
            desc={item.desc}
            program={item.program}
            info={item.info}
            batch={item.batch}
            mentor={item.mentor}
            promo={item.promo}
          />
        ))}
      </div>
      
      <Footer className="bg-[#ffff] text-white py-[28px] px-[120px] flex justify-between"></Footer>
    </>
  );
}

export default App;

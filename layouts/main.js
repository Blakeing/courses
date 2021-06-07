import Header from "@components/Header";
import Footer from "@components/Footer";
import PreviewBanner from "@components/PreviewBanner";

export default function MainLayout(props) {
  const { preview, classes } = props;
  return (
    <>
      {preview && <PreviewBanner />}
      <Header />
      <main className={classes}>{props.children}</main>
      <Footer />
    </>
  );
}

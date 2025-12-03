import { Heart, Users, BookOpen, Target, Globe, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { churchInfo } from "@/lib/siteInfo";
import ImageGallery from "@/components/ImageGallery";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Love & Unity",
      description: "Embracing every person with Christ's love, building a united family of believers across Ghana.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Supporting one another through life's joys and challenges with genuine fellowship.",
    },
    {
      icon: BookOpen,
      title: "Biblical Truth",
      description: "Rooted in God's Word, committed to sound doctrine and practical application.",
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every member discovering and fulfilling their God-given purpose and calling.",
    },
    {
      icon: Globe,
      title: "Missions",
      description: "Reaching beyond our borders to spread the Gospel throughout Ghana and Africa.",
    },
    {
      icon: Crown,
      title: "Excellence",
      description: "Serving God with excellence in worship, leadership, and community impact.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-gold py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Newness of Life Incorporated
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A Bible-believing church with the mission to raise men to become like Christ, transforming lives and giving deliverance through the Word of God
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Newness of Life is a Christian Bible-believing church with the mission to raise men to become like Christ. We are transforming lives and giving deliverance through the Word of God.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our commission is to build the Man Christ in Humanity. We believe in the transformative power of prayer, fasting, and the living Word to develop Christ-like character in every believer.
              </p>
              <p className="text-lg text-muted-foreground">
                Through giving life to the needy and practical discipleship, we are becoming a global ministry that builds Christ in humanity, starting from Tarkwa and reaching the world.
              </p>
            </div>
            <div className="animate-in fade-in slide-in-from-right duration-1000">
              <img
                src="/src/assets/who we are image .jpg"
                alt="Who We Are"
                className="rounded-2xl shadow-gold-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Commission Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Foundation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do as a ministry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-glow transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Commission</h3>
                <p className="text-lg text-muted-foreground">
                  To build the Man Christ in Humanity
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '150ms' }}>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To be a global ministry that builds Christ in Humanity
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To train, equip and develop Christ in Humanity through Prayers, Fasting, the Word and Giving of Life to the Needy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Church Life Gallery Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Church Life in Pictures</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Glimpses of our vibrant community, worship services, and outreach activities
            </p>
          </div>
          
          <ImageGallery className="max-w-6xl mx-auto" />
        </div>
      </section>

      {/* Upcoming Event Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Upcoming Event</h2>
          </div>

          <Card className="max-w-4xl mx-auto hover:shadow-glow transition-all duration-300">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-primary mb-4">CROSS OVER 2025</h3>
              <p className="text-xl text-muted-foreground mb-6">with Pastor Desmond</p>
              <p className="text-lg text-muted-foreground mb-8">
                Join us for a prophetic watch-night encounter ushering the church into 2025
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p className="font-semibold">31st December, 9:00 PM till dawn</p>
                <p>At Newness Cathedral, Tarkwa</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated servants called by God to shepherd and guide our congregation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-primary-foreground font-bold">PA</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">Pastor Akwasi Boateng</h3>
                <p className="text-sm text-secondary mb-3">Senior Pastor</p>
                <p className="text-muted-foreground text-sm">
                  Leading with wisdom and compassion for over 20 years
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-primary-foreground font-bold">AA</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">Apostle Ama Agyeman</h3>
                <p className="text-sm text-secondary mb-3">Associate Pastor</p>
                <p className="text-muted-foreground text-sm">
                  Passionate about women's ministry and community outreach
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-primary-foreground font-bold">EO</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">Elder Emmanuel Osei</h3>
                <p className="text-sm text-secondary mb-3">Youth Pastor</p>
                <p className="text-muted-foreground text-sm">
                  Empowering the next generation to live boldly for Christ
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

import { Heart, Building, Users, BookOpen, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const GivePage = () => {
  const [selectedAmount, setSelectedAmount] = useState("100");
  const [customAmount, setCustomAmount] = useState("");

  const givingOptions = [
    {
      icon: Heart,
      title: "Tithes & Offerings",
      description: "Support the regular ministry and operations of the church through faithful giving.",
    },
    {
      icon: Building,
      title: "Building Fund",
      description: "Help us expand our facilities to accommodate our growing congregation.",
    },
    {
      icon: Users,
      title: "Missions & Outreach",
      description: "Support local and international mission work and community outreach programs.",
    },
    {
      icon: BookOpen,
      title: "Education Fund",
      description: "Provide scholarships and educational support for underprivileged children.",
    },
    {
      icon: Globe,
      title: "Media Ministry",
      description: "Help us reach more people through broadcast, online streaming, and digital media.",
    },
    {
      icon: Zap,
      title: "Special Projects",
      description: "Support specific initiatives like conferences, camps, and special programs.",
    },
  ];

  const bankDetails = [
    {
      bank: "Amenfiman Rural Bank",
      accountName: "Newness of Life Incor. Church",
      accountNumber: "2620004551931",
      branch: "Tarkwa",
    },
    {
      bank: "GT Bank",
      accountName: "Newness of Life Incorp. Church",
      accountNumber: "4021211325140",
      branch: "Tarkwa",
    },
  ];

  const mobileMoneyDetails = {
    name: "Mavil Annobil",
    number: "0539368670",
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-gold py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Give Online
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
            </p>
          </div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ways to Give
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your generosity helps us continue God's work in our community and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {givingOptions.map((option, index) => (
              <Card
                key={option.title}
                className="hover:shadow-glow transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-block p-4 bg-gradient-gold rounded-full">
                    <option.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Choose Your Payment Method
            </h2>

            <div className="space-y-8">
              {bankDetails.map((bank, idx) => (
                <Card key={idx} className="hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-6">Bank Transfer ({bank.bank})</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="text-sm font-semibold text-foreground">Bank:</p>
                        <p>{bank.bank}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Account Name:</p>
                        <p>{bank.accountName}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Account Number:</p>
                        <p className="text-xl font-bold text-primary">{bank.accountNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Branch:</p>
                        <p>{bank.branch}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Mobile Money */}
              <Card className="hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Mobile Money</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Name:</p>
                      <p className="mb-4">{mobileMoneyDetails.name}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="font-semibold text-foreground">Number:</span>
                        <span className="text-primary font-bold">{mobileMoneyDetails.number}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Give Form */}
            <Card className="mt-8 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Quick Give</h3>
                <div className="space-y-6">
                  <div>
                    <Label className="text-base mb-3 block">Select Amount (GHS)</Label>
                    <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount}>
                      <div className="grid grid-cols-3 gap-4">
                        {["50", "100", "200", "500", "1000"].map((amount) => (
                          <div key={amount} className="flex items-center">
                            <RadioGroupItem value={amount} id={amount} className="sr-only peer" />
                            <Label
                              htmlFor={amount}
                              className="flex items-center justify-center w-full p-4 border-2 border-border rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent hover:bg-accent transition-all"
                            >
                              <span className="font-bold">₵{amount}</span>
                            </Label>
                          </div>
                        ))}
                        <div className="flex items-center">
                          <RadioGroupItem value="custom" id="custom" className="sr-only peer" />
                          <Label
                            htmlFor="custom"
                            className="flex items-center justify-center w-full p-4 border-2 border-border rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent hover:bg-accent transition-all"
                          >
                            <span className="font-bold">Custom</span>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {selectedAmount === "custom" && (
                    <div>
                      <Label htmlFor="customAmount">Custom Amount (GHS)</Label>
                      <Input
                        id="customAmount"
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="purpose">Giving Purpose</Label>
                    <select
                      id="purpose"
                      className="w-full mt-2 p-3 border-2 border-input rounded-lg bg-background"
                    >
                      <option>Tithes & Offerings</option>
                      <option>Building Fund</option>
                      <option>Missions & Outreach</option>
                      <option>Education Fund</option>
                      <option>Media Ministry</option>
                      <option>Special Projects</option>
                    </select>
                  </div>

                  <Button variant="shine" size="lg" className="w-full text-lg" onClick={() => alert('Payment integration will be completed next. For now, please use the bank/MoMo details provided above.')}>
                    Proceed to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Your Impact
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every gift makes a difference. Through your generosity, we are able to:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
                <p className="text-muted-foreground">Lives Impacted</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">200+</p>
                <p className="text-muted-foreground">Scholarships Given</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">15</p>
                <p className="text-muted-foreground">Communities Reached</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GivePage;

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home-page";
import AuthPage from "@/pages/auth-page";
import ContactPage from "@/pages/contact-page";
import CareersPage from "@/pages/careers-page";
import ApplyJobPage from "@/pages/apply-job";
import ApplyInternshipPage from "@/pages/apply-internship";
import AboutPage from "@/pages/about-page";
import AdminDashboard from "@/pages/admin-dashboard";
import CookiePolicy from "@/pages/cookie-policy";
import BlogPage from "@/pages/blog-page";
import BlogPostPrivacyWeave from "@/pages/blog-post-privacyweave";
import BlogPostDLPIAM from "@/pages/blog-post-dlp-iam";
import BlogPostQuantumPrivacy from "@/pages/blog-post-quantum-privacy";
import BlogPostDataPrivacy2025 from "@/pages/blog-post-data-privacy-2025";
import FeaturePage from "@/pages/feature-page";
import AIScannerPage from "@/pages/products/ai-scanner";
import ProtectionShieldPage from "@/pages/products/protection-shield";
import SupplyChainPage from "@/pages/products/supply-chain";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { ChatInterface } from "./components/chat/chat-interface";
// removed corner logo per request
import { CookieBanner } from "./components/cookie-banner";
import FloatingDotsBackground from "./components/floating-dots-background";
import Feedback from "@/pages/Feedback"; // ✅ Import Feedback component

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/careers/apply/:id" component={ApplyJobPage} />
      <Route path="/careers/apply-internship" component={ApplyInternshipPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/feedback" component={Feedback} /> {/* ✅ New Feedback route */}
      <Route path="/feature" component={FeaturePage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/beyond-encryption-privacyweave" component={BlogPostPrivacyWeave} />
      <Route path="/blog/dlp-iam-security-blindspot" component={BlogPostDLPIAM} />
      <Route path="/blog/quantum-enhanced-ai-privacy" component={BlogPostQuantumPrivacy} />
      <Route path="/blog/understanding-data-privacy-2025" component={BlogPostDataPrivacy2025} />
      <Route path="/products/ai-scanner" component={AIScannerPage} />
      <Route path="/products/protection-shield" component={ProtectionShieldPage} />
      <Route path="/products/supply-chain" component={SupplyChainPage} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <ProtectedRoute path="/admin" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="flex flex-col min-h-screen relative">
          <FloatingDotsBackground />
          <Header />
          {null}
          <main className="flex-grow pt-20 relative z-10">
            <Router />
          </main>
          <Footer />
          <ChatInterface />
          <CookieBanner />
        </div>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

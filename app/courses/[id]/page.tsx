"use client";

import Layout from "../../components/Layout";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import CourseEnrollmentForm from "../../components/CourseEnrollmentForm";

export default function CourseDetail() {
  const params = useParams();
  const courseId = params.id;
  const [activeTab, setActiveTab] = useState("overview");
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);
  const interestSentRef = useRef(false);

  const handleEnrollClick = () => {
    setIsEnrollmentFormOpen(true);
  };

  const handleFormClose = () => {
    setIsEnrollmentFormOpen(false);
  };

  // Course data - same as in CoursesCatalog
  const coursesData: Record<string, any> = {
    "1": {
      id: 1,
      code: "MC-101",
      title: "AWS Solutions Architect Associate",
      category: "Cloud Computing",
      duration: "6 Weeks",
      level: "Intermediate",
      mode: "Online + Offline",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
      description: "Master AWS cloud architecture and become certified as an AWS Solutions Architect.",
      overview: `Learn to design and deploy scalable, highly available, and fault-tolerant systems on AWS. This comprehensive course covers EC2, S3, RDS, Lambda, and more. Perfect for professionals looking to advance their cloud career.`,
      learningOutcomes: [
        "Design scalable AWS solutions",
        "Implement security best practices",
        "Optimize costs and performance",
        "Prepare for AWS certification",
        "Deploy production-grade applications",
        "Manage databases and storage effectively"
      ],
      syllabus: [
        "AWS Fundamentals & Services Overview",
        "IAM & Security Management",
        "EC2 & Auto Scaling",
        "Storage Services (S3, EBS, EFS)",
        "Databases (RDS, DynamoDB)",
        "Networking & VPC",
        "Lambda & Serverless",
        "Monitoring & Logging"
      ],
      instructors: [
        { name: "John Smith", title: "AWS Solutions Architect", experience: "10+ years" },
        { name: "Sarah Johnson", title: "Cloud Engineer", experience: "8+ years" }
      ],
      schedule: "Working Professional Weekend - 5 Hours Class",
      alignment: "Flexible Batch - Start Anytime",
      reviews: 4.8,
      reviewCount: 245,
      fee: "₹15,000",
      sessionsDelivered: "1,047",
      trainedProfessionals: "38,365",
      examCode: "AWS-SAA",
      durationHours: "24",
      trainingLeadership: "30+ Years",
      popular: true,
      courseInformation: {
        objective: "This course is designed to teach professionals how to design and deploy secure, scalable, and reliable applications on AWS.",
        targetAudience: "IT professionals, system administrators, developers, and DevOps engineers",
        prerequisites: "Basic understanding of cloud computing concepts",
        certifications: "AWS Solutions Architect Associate Certification",
        jobRoles: "Cloud Architect, Solutions Architect, Cloud Engineer"
      }
    },
    "2": {
      id: 2,
      code: "CS-201",
      title: "Certified Ethical Hacker (CEH)",
      category: "Cyber Security",
      duration: "8 Weeks",
      level: "Advanced",
      mode: "Online",
      image: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?q=80&w=1170&auto=format&fit=crop",
      description: "Become a certified ethical hacker and master cybersecurity techniques.",
      overview: `Comprehensive course on ethical hacking covering reconnaissance, scanning, enumeration, and exploitation. Learn to identify and fix security vulnerabilities before malicious hackers find them.`,
      learningOutcomes: [
        "Perform ethical hacking assessments",
        "Identify security vulnerabilities",
        "Use penetration testing tools",
        "Implement security controls",
        "Understand cryptography basics",
        "Prepare for CEH certification"
      ],
      syllabus: [
        "Footprinting & Reconnaissance",
        "Scanning & Enumeration",
        "System Hacking",
        "Network & Perimeter Hacking",
        "Web Application Security",
        "Wireless Network Security",
        "Mobile Security",
        "Cloud Security"
      ],
      instructors: [
        { name: "Mike Chen", title: "Ethical Hacker", experience: "12+ years" },
        { name: "Lisa Rodriguez", title: "Security Consultant", experience: "9+ years" }
      ],
      schedule: "Working Professional Weekend - 6 Hours Class",
      alignment: "Flexible Batch - Start Anytime",
      reviews: 4.9,
      reviewCount: 312,
      fee: "₹25,000",
      sessionsDelivered: "892",
      trainedProfessionals: "31,245",
      examCode: "CEH-v12",
      durationHours: "32",
      trainingLeadership: "25+ Years",
      popular: true,
      courseInformation: {
        objective: "Master ethical hacking techniques and prepare for official CEH certification to become a certified security professional.",
        targetAudience: "Security professionals, network administrators, IT auditors, and aspiring ethical hackers",
        prerequisites: "2+ years IT experience, networking knowledge",
        certifications: "CEH (Certified Ethical Hacker) Certification",
        jobRoles: "Ethical Hacker, Penetration Tester, Security Analyst, Security Engineer"
      }
    },
    "3": {
      id: 3,
      code: "AI-301",
      title: "Machine Learning with Python",
      category: "AI & Machine Learning",
      duration: "10 Weeks",
      level: "Intermediate",
      mode: "Offline",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
      description: "Learn machine learning algorithms and implement them using Python.",
      overview: `Master machine learning concepts and practical implementation. Build real-world ML projects using Python libraries like Scikit-learn, Pandas, and NumPy.`,
      learningOutcomes: [
        "Understand ML algorithms",
        "Build predictive models",
        "Feature engineering techniques",
        "Model evaluation & optimization",
        "Work with real datasets",
        "Deploy ML models"
      ],
      syllabus: [
        "Python Fundamentals for ML",
        "Data Analysis with Pandas",
        "Data Visualization",
        "Supervised Learning",
        "Unsupervised Learning",
        "Ensemble Methods",
        "Model Deployment",
        "Real-world Projects"
      ],
      instructors: [
        { name: "Dr. Raj Patel", title: "ML Specialist", experience: "11+ years" },
        { name: "Emma Wilson", title: "Data Scientist", experience: "7+ years" }
      ],
      schedule: "Working Professional Weekend - 5 Hours Class",
      alignment: "Flexible Batch - Start Anytime",
      reviews: 4.7,
      reviewCount: 198,
      fee: "₹20,000",
      sessionsDelivered: "756",
      trainedProfessionals: "22,180",
      examCode: "ML-PY",
      durationHours: "28",
      trainingLeadership: "28+ Years",
      popular: false,
      courseInformation: {
        objective: "Build expertise in machine learning algorithms and develop practical skills to solve real-world data science problems.",
        targetAudience: "Data analysts, software developers, aspiring data scientists, and business professionals",
        prerequisites: "Python programming knowledge, basic statistics",
        certifications: "MIS Machine Learning Certificate",
        jobRoles: "Machine Learning Engineer, Data Scientist, AI Developer, Analytics Engineer"
      }
    }
  };

  const course = coursesData[courseId as string];

  useEffect(() => {
    if (!course || interestSentRef.current) {
      return;
    }

    interestSentRef.current = true;

    fetch("/api/course-interest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseName: course.title }),
    }).catch(() => {
      interestSentRef.current = false;
    });
  }, [course]);

  if (!course) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Course Not Found</h1>
          <Link href="/courses">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
              Back to Courses
            </button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pb-20">
        {/* Breadcrumb & Header with Popular Badge */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span>/</span>
            <Link href="/courses" className="text-blue-600 hover:underline">Courses</Link>
            <span>/</span>
            <span>{course.title}</span>
          </div>
          <div className="text-right text-xs text-slate-500">
            Last Updated : 09 Dec 2025
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-8 -mx-6">
          <div className="relative h-72 bg-gradient-to-r from-blue-600 to-blue-800 flex items-end overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 w-full px-6 pb-8">
              <div className="flex items-center gap-3 mb-3">
                {course.popular && (
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <span>👑</span> Popular
                  </div>
                )}
              </div>
              <h1 className="text-4xl font-bold text-white mb-3 leading-tight">{course.title}</h1>
              <div className="flex items-center gap-4 text-blue-100 text-sm">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {course.reviews} ({course.reviewCount} reviews)
                </div>
                <span>•</span>
                <span>{course.level}</span>
                <span>•</span>
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8 border-b border-slate-300 flex gap-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-3 font-semibold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === "overview"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-700 hover:text-slate-900"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("schedule")}
            className={`px-4 py-3 font-semibold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === "schedule"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-700 hover:text-slate-900"
            }`}
          >
            Schedule & Fee
          </button>
          <button
            onClick={() => setActiveTab("request")}
            className={`px-4 py-3 font-semibold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === "request"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-700 hover:text-slate-900"
            }`}
          >
            Request More Info
          </button>
          <button
            onClick={() => setActiveTab("information")}
            className={`px-4 py-3 font-semibold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === "information"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-700 hover:text-slate-900"
            }`}
          >
            Course Information
          </button>
          <button
            onClick={() => setActiveTab("download")}
            className={`px-4 py-3 font-semibold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === "download"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-700 hover:text-slate-900"
            }`}
          >
            📥 Download Course Contents
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{course.code}: {course.title} Course Overview</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">{course.overview}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                    Show More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className="text-2xl font-bold text-slate-900">{course.reviews}</span>
                  </div>
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors">
                    Request a Quote
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Learning Outcomes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.learningOutcomes.map((outcome: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Schedule & Fee Tab */}
            {activeTab === "schedule" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Schedule & Fee Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Course Schedule</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-slate-600 font-semibold">Batch Timing</p>
                          <p className="text-slate-900 font-bold">{course.schedule}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 font-semibold">Batch Alignment</p>
                          <p className="text-slate-900 font-bold">{course.alignment}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Course Fee</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-slate-600 font-semibold">Total Fee</p>
                          <p className="text-3xl font-bold text-green-600">{course.fee}</p>
                        </div>
                        <button onClick={handleEnrollClick} className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Request More Info Tab */}
            {activeTab === "request" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Request More Information</h2>
                <form className="space-y-4 bg-slate-50 rounded-xl p-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                    <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                    <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                    <input type="tel" placeholder="Enter your mobile number" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea placeholder="Your message here..." rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>
                  <button type="submit" className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
                    Submit Request
                  </button>
                </form>
              </div>
            )}

            {/* Course Information Tab */}
            {activeTab === "information" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Course Information</h2>
                <div className="space-y-6">
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Objective</h3>
                    <p className="text-slate-700">{course.courseInformation.objective}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Target Audience</h3>
                    <p className="text-slate-700">{course.courseInformation.targetAudience}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Prerequisites</h3>
                    <p className="text-slate-700">{course.courseInformation.prerequisites}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Certifications</h3>
                    <p className="text-slate-700">{course.courseInformation.certifications}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Job Roles</h3>
                    <p className="text-slate-700">{course.courseInformation.jobRoles}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Download Tab */}
            {activeTab === "download" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Download Course Contents</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl">📄</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900">Course Syllabus (PDF)</h3>
                        <p className="text-sm text-slate-600">Complete course structure and topics</p>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg">Download</button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white text-xl">📚</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900">Course Brochure (PDF)</h3>
                        <p className="text-sm text-slate-600">Detailed course information and pricing</p>
                      </div>
                      <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg">Download</button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xl">📊</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900">Sample Course Materials</h3>
                        <p className="text-sm text-slate-600">Preview of course content and lectures</p>
                      </div>
                      <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg">Download</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Statistics */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-gradient-to-b from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Course Statistics</h3>
              
              <div className="space-y-4">
                {/* Delivered Sessions */}
                <div className="flex items-start gap-4 pb-4 border-b border-blue-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    👥
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">{course.sessionsDelivered}</p>
                    <p className="text-sm text-slate-600">Delivered Sessions</p>
                  </div>
                </div>

                {/* Trained Professionals */}
                <div className="flex items-start gap-4 pb-4 border-b border-blue-200">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    📚
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">{course.trainedProfessionals}</p>
                    <p className="text-sm text-slate-600">Trained Professionals</p>
                  </div>
                </div>

                {/* Exam Code */}
                <div className="flex items-start gap-4 pb-4 border-b border-blue-200">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    📋
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">{course.examCode}</p>
                    <p className="text-sm text-slate-600">Exam Code</p>
                  </div>
                </div>

                {/* Duration Hours */}
                <div className="flex items-start gap-4 pb-4 border-b border-blue-200">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    ⏱️
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">{course.durationHours} Hours</p>
                    <p className="text-sm text-slate-600">Duration</p>
                  </div>
                </div>

                {/* Training Leadership */}
                <div className="flex items-start gap-4 pb-4 border-b border-blue-200">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    🏆
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">{course.trainingLeadership}</p>
                    <p className="text-sm text-slate-600">Training Leadership</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 space-y-3 pt-6 border-t border-blue-200">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-sm text-slate-700">Expert Instructors</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-sm text-slate-700">Global Training</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-sm text-slate-700">Flexible Learning</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 space-y-3">
                <button 
                  onClick={handleEnrollClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Enroll Now
                </button>
                <button className="w-full bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-3 rounded-lg transition-colors">
                  💬 Chat with us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Enrollment Form */}
      <CourseEnrollmentForm 
        isOpen={isEnrollmentFormOpen} 
        onClose={handleFormClose} 
        courseTitle={course?.title || 'Master Course'}
      />
    </Layout>
  );
}

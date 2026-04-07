"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CourseEnrollmentForm from "./CourseEnrollmentForm";
import { courses as courseCatalog } from "../../lib/courseData";

export default function MasterCareerCourses() {
    const router = useRouter();
    const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<{ title: string; slug?: string } | null>(null);

    const normalizeCourseKey = (value: string) =>
        value.toLowerCase().replace(/[^a-z0-9]/g, "");

    const getCatalogCourse = (courseTitle: string) => {
        const targetKey = normalizeCourseKey(courseTitle);
        return courseCatalog.find((course) => normalizeCourseKey(course.title) === targetKey);
    };

    const openCourseDetail = (courseTitle: string) => {
        const matchedCourse = getCatalogCourse(courseTitle);
        router.push(matchedCourse ? `/courses/${matchedCourse.slug}` : "/courses");
    };

    const handleEnrollClick = (courseTitle: string) => {
        const matchedCourse = getCatalogCourse(courseTitle);
        setSelectedCourse({
            title: courseTitle,
            slug: matchedCourse?.slug,
        });
        setIsEnrollmentFormOpen(true);
    };

    const handleFormClose = () => {
        setIsEnrollmentFormOpen(false);
        setSelectedCourse(null);
    };
    
    const masterCourses = [
        {
            title: "Master Certified Cloud Computing & Cyber Security Engineer",
            duration: "18 Months",
            mode: "Offline/Hybrid",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title:
                "Master Certified Cloud Computing Professional with Artificial Intelligence",
            duration: "6 Months",
            mode: "Offline/Hybrid",
            image:
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Master Certified Cloud Computing & Cyber Security Professional",
            duration: "18 Months",
            mode: "Offline/Hybrid",
            image:
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Master In Gaming & Metaverse Design",
            duration: "26 Months",
            mode: "Offline",
            image:
                "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
    ];

    const basicCourses = [
        {
            title: "FULL STACK DEVELOPMENT WITH AI INTEGRATION",
            duration: "12/6Months",
            mode: "Online/Offline",
            image:
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Video Editing Fundamentals",
            duration: "2 Months",
            mode: "Online/Offline",
            image:
                "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Digital Marketing Essentials",
            duration: "3 Months",
            mode: "Online/Offline",
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        },
    ];

    const flagshipCourses = [
        {
            title: "Advanced Web Development Masterclass",
            duration: "12 Months",
            mode: "Online/Offline",
            image:
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "AI & Machine Learning Intensive",
            duration: "10 Months",
            mode: "Online/Offline",
            image:
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Cybersecurity & Network Mastery",
            duration: "14 Months",
            mode: "Offline/Hybrid",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Cloud Architecture & DevOps",
            duration: "9 Months",
            mode: "Online/Offline",
            image:
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
    ];

    return (
        <section className="mt-16 w-full relative">
            {/* Left decorative gradient */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none" />
            {/* Right decorative gradient */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-purple-500/10 to-transparent pointer-events-none" />
            
            <div className="rounded-[56px_0_0_0] lg:rounded-[560px_0_0_0] bg-slate-800 text-white p-6 sm:p-8 lg:p-10 w-full">
                <div className="grid gap-8 w-full grid-cols-1 lg:grid-cols-[280px_1fr_320px] items-start">
                    {/* Left Image Panel */}
                    <div className="w-full">
                        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0"
                                alt="Master Career Courses"
                                className="w-full h-[360px] object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-3xl font-bold">Career Courses</h3>
                        <div className="mt-2 h-0.5 w-32 bg-white/70" />
                    </div>

                    {/* Middle Content */}
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="space-y-5 text-slate-100/90 leading-relaxed">
                            <p className="text-white">
                                At Master, we offer a wide range of career-focused certification
                                courses designed to equip students with the skills and knowledge
                                needed to succeed in today&apos;s technology landscape.
                            </p>
                            <p>
                                Our certification courses are recognized by industry leaders, and
                                our curriculum is updated regularly to match the latest industry
                                trends and technologies. Whether you are a beginner or an
                                experienced professional, Master has a course that fits your goals.
                            </p>
                            <p>
                                Our courses are taught by experienced trainers who are passionate
                                about helping learners advance their careers.
                            </p>
                        </div>

                        <div className="space-y-5 text-slate-100/90 leading-relaxed">
                            <p>
                                Get certified in your field of choice with comprehensive Master
                                programs designed by industry experts. Learn at your own pace
                                with flexible online and hybrid formats.
                            </p>
                            <p>
                                Our courses include interactive lessons, hands-on exercises, and
                                real-world scenarios to ensure you are fully prepared for
                                certification exams.
                            </p>
                            <p>
                                Invest in your future with Master career courses and take the next
                                step toward your professional goals.
                            </p>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="bg-black text-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-5">
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0"
                                    alt="Master Certification"
                                    className="w-full h-44 object-cover"
                                />
                            </div>
                        </div>
                        <div className="px-5 pb-6">
                            <h4 className="text-white font-bold text-lg leading-snug">
                                Master Certified Cloud Computing Engineer with Artificial
                                Intelligence
                            </h4>
                            <div className="mt-3 space-y-2 text-sm text-slate-200">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>12 Months</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                            />
                                        </svg>
                                    </span>
                                    <span>Offline/Hybrid</span>
                                </div>
                            </div>
                            <div className="mt-4 border-t border-white/20" />
                            <div className="mt-3 text-sm font-semibold text-slate-100">
                                Explore More
                            </div>
                            <div className="mt-4">
                                <button onClick={() => openCourseDetail(masterCourses[0].title)} className="w-full rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-semibold py-2.5 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#1c2a4a] py-10">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {masterCourses.map((course) => (
                            <div
                                key={course.title}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
                            >
                                <div className="h-44 overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <h4 className="text-[#1e3a8a] font-semibold text-base leading-snug">
                                        {course.title}
                                    </h4>
                                    <div className="mt-3 space-y-1 text-sm text-slate-700">
                                        <div className="flex items-center gap-2">
                                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-[#1e3a8a]">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </span>
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-[#1e3a8a]">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                    />
                                                </svg>
                                            </span>
                                            <span>{course.mode}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 border-t border-blue-200" />
                                    <div className="mt-3 text-sm font-semibold text-slate-800 flex-1">
                                        Explore More
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        <button onClick={() => openCourseDetail(course.title)} className="w-1/2 rounded-lg border border-[#1e3a8a] text-[#1e3a8a] hover:bg-blue-50 font-semibold py-2.5 transition-colors">
                                            Learn More
                                        </button>
                                        <button onClick={() => handleEnrollClick(course.title)} className="w-1/2 rounded-lg bg-[#1e3a8a] hover:bg-[#1b347c] text-white font-semibold py-2.5 transition-colors">
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Flagship Courses Section */}
            <div className="rounded-[56px_0_0_0] lg:rounded-[560px_0_0_0] bg-slate-700 text-white p-6 sm:p-8 lg:p-10 w-full mt-10">
                <div className="grid gap-8 w-full grid-cols-1 lg:grid-cols-[280px_1fr_320px] items-start">
                    {/* Left Image Panel */}
                    <div className="w-full">
                        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0"
                                alt="Flagship Courses"
                                className="w-full h-[360px] object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-3xl font-bold">Flagship Courses</h3>
                        <div className="mt-2 h-0.5 w-32 bg-white/70" />
                    </div>

                    {/* Middle Content */}
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="space-y-5 text-slate-100/90 leading-relaxed">
                            <p>
                                Our flagship courses are comprehensive, industry-aligned programs
                                designed to provide deep expertise in critical technology domains.
                                These courses combine theoretical knowledge with practical applications.
                            </p>
                            <p>
                                Each flagship course is led by industry experts with years of experience.
                                We focus on hands-on learning through real-world projects and case studies
                                to ensure you gain practical skills applicable in the job market.
                            </p>
                            <p>
                                Perfect for professionals looking to advance their careers or specialize
                                in emerging technology fields.
                            </p>
                        </div>

                        <div className="space-y-5 text-slate-100/90 leading-relaxed">
                            <p>
                                Our curriculum is regularly updated to reflect the latest industry
                                trends and best practices in technology.
                            </p>
                            <p>
                                Learn with mentorship support from practicing industry professionals
                                who provide guidance throughout your learning journey.
                            </p>
                            <p>
                                Upon completion, you&apos;ll be equipped with portfolio-worthy projects
                                to showcase your expertise to potential employers.
                            </p>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="bg-black text-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-5">
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0"
                                    alt="Featured Course"
                                    className="w-full h-44 object-cover"
                                />
                            </div>
                        </div>
                        <div className="px-5 pb-6">
                            <h4 className="text-white font-bold text-lg leading-snug">
                                {flagshipCourses[0].title}
                            </h4>
                            <div className="mt-3 space-y-2 text-sm text-slate-200">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>{flagshipCourses[0].duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                            />
                                        </svg>
                                    </span>
                                    <span>{flagshipCourses[0].mode}</span>
                                </div>
                            </div>
                            <div className="mt-4 border-t border-white/20" />
                            <div className="mt-3 text-sm font-semibold text-slate-100">
                                Explore More
                            </div>
                            <div className="mt-4">
                                <button onClick={() => openCourseDetail(flagshipCourses[0].title)} className="w-full rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-semibold py-2.5 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skill Development Courses Section */}
            <div className="w-full bg-gradient-to-b from-slate-700 to-slate-600 py-10 mt-10">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                        SKILL DEVELOPMENT COURSES
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {basicCourses.map((course) => (
                            <div
                                key={course.title}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
                            >
                                <div className="h-44 overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <h4 className="text-[#1e3a8a] font-semibold text-base leading-snug">
                                        {course.title}
                                    </h4>
                                    <div className="mt-3 space-y-1 text-sm text-slate-700">
                                        <div className="flex items-center gap-2">
                                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-[#1e3a8a]">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </span>
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-[#1e3a8a]">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                    />
                                                </svg>
                                            </span>
                                            <span>{course.mode}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 border-t border-blue-200" />
                                    <div className="mt-3 text-sm font-semibold text-slate-800 flex-1">
                                        Explore More
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        <button onClick={() => openCourseDetail(course.title)} className="w-1/2 rounded-lg border border-[#1e3a8a] text-[#1e3a8a] hover:bg-blue-50 font-semibold py-2.5 transition-colors">
                                            Learn More
                                        </button>
                                        <button onClick={() => handleEnrollClick(course.title)} className="w-1/2 rounded-lg bg-[#1e3a8a] hover:bg-[#1b347c] text-white font-semibold py-2.5 transition-colors">
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isEnrollmentFormOpen && (
                <CourseEnrollmentForm
                    isOpen={isEnrollmentFormOpen}
                    onClose={handleFormClose}
                    courseTitle={selectedCourse?.title || 'Master Course'}
                    courseSlug={selectedCourse?.slug}
                    successPath={selectedCourse?.slug ? `/courses/${selectedCourse.slug}/welcome` : undefined}
                />
            )}
        </section>
    );
}

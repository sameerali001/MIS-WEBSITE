const ENROLLMENT_STORAGE_KEY = "mis-enrolled-courses";
const ENROLLMENT_EVENT_NAME = "mis-enrollment-access-changed";

export type EnrollmentRecord = {
  courseSlug: string;
  courseTitle: string;
  name: string;
  email: string;
  enrolledAt: string;
};

let cachedSnapshot: EnrollmentRecord[] | null = null;

function readAllRecords(): EnrollmentRecord[] {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = window.localStorage.getItem(ENROLLMENT_STORAGE_KEY);

  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAllRecords(records: EnrollmentRecord[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(ENROLLMENT_STORAGE_KEY, JSON.stringify(records));
  cachedSnapshot = null; // invalidate cache on write
  window.dispatchEvent(new CustomEvent(ENROLLMENT_EVENT_NAME));
}

export function saveEnrollmentAccess(record: EnrollmentRecord) {
  const records = readAllRecords().filter((entry) => entry.courseSlug !== record.courseSlug);
  records.push(record);
  writeAllRecords(records);
}

export function getEnrollmentAccess(courseSlug: string) {
  return readAllRecords().find((entry) => entry.courseSlug === courseSlug) || null;
}

export function hasEnrollmentAccess(courseSlug: string) {
  return Boolean(getEnrollmentAccess(courseSlug));
}

export function subscribeEnrollmentAccess(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (!event.key || event.key === ENROLLMENT_STORAGE_KEY) {
      cachedSnapshot = null;
      onStoreChange();
    }
  };

  const handleCustom = () => {
    cachedSnapshot = null;
    onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(ENROLLMENT_EVENT_NAME, handleCustom);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(ENROLLMENT_EVENT_NAME, handleCustom);
  };
}

export function getEnrollmentAccessSnapshot() {
  if (cachedSnapshot === null) {
    cachedSnapshot = readAllRecords();
  }
  return cachedSnapshot;
}
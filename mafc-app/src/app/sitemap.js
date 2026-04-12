export const revalidate = 3600;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://mafc-app.vercel.app/');

import { getAllNews, getSubjectCommissionList, getExtracurricularPageData, getIntroductoryQuidePageData, getIntelligentNetworkingPageData } from "@/server/strapi/strapi";


export default async function sitemap() {

 const staticPages = [
  '/',
  '/about/regulatory_framework',
  '/about/mission_and_goals',
  '/about/college_history',
  '/about/memory_page',
  '/about/virtual_tour',
  '/about/management_system',
  '/about/councils_and_commissions',
  '/about/structural_units/departments',
  '/about/structural_units/subject_commisions',
  '/about/structural_units/methodical_office',
  '/about/structural_units/classrooms_and_laboratories',
  '/about/structural_units/library',
  '/about/structural_units/plant_production_laboratory',
  '/about/structural_units/animal_husbandry_laboratory',
  '/about/structural_units/training_and_production_workshop',
  '/about/structural_units/educational_accounting',
  '/about/structural_units/document_management_and_hr_department',
  '/about/modern_war_museum',
  '/about/material_and_technical_base',
  '/about/transparency_and_information_openness',
  '/about/transparency_and_information_openness/financial_transparency',
  '/about/transparency_and_information_openness/vacancies',
  '/about/transparency_and_information_openness/director_report',
  '/about/transparency_and_information_openness/bank_details',
  '/about/transparency_and_information_openness/contacts',

  '/activity_vectors/quality_and_content_of_education',
  '/activity_vectors/quality_and_content_of_education/educational_activities',
  '/activity_vectors/quality_and_content_of_education/ensuring_the_quality_of_education',
  '/activity_vectors/quality_and_content_of_education/training_and_production_activities',
  '/activity_vectors/quality_and_content_of_education/career_orientation_and_image_formation',
  '/activity_vectors/quality_and_content_of_education/development_of_academic_integrity',
  '/activity_vectors/safe_and_inclusive_ecosystem',
  '/activity_vectors/safe_and_inclusive_ecosystem/work_safety',
  '/activity_vectors/safe_and_inclusive_ecosystem/accessibility_and_inclusive_learning',
  '/activity_vectors/social_support',
  '/activity_vectors/partners',
  '/activity_vectors/husbandry_activity',
  '/activity_vectors/anti_corruption_activities',

  '/educational_process/conceptual_principles',
  '/educational_process/educational_programs',
  '/educational_process/schedules',
  '/educational_process/educational_opportunities_and_trajectory',
  '/educational_process/educational_opportunities_and_trajectory/optional_subjects',
  '/educational_process/educational_opportunities_and_trajectory/practical_training',
  '/educational_process/educational_opportunities_and_trajectory/dual_form_of_learning',
  '/educational_process/educational_opportunities_and_trajectory/degree_education',
  '/educational_process/educational_opportunities_and_trajectory/distance_learning',
  '/educational_process/monitoring_the_quality_of_education',
  '/educational_process/academic_mobility',
  '/educational_process/nmt',

  '/entrants/admission_rules',
  '/entrants/admission_rules/regulatory_framework',
  '/entrants/admission_rules/special_entry_conditions',
  '/entrants/admission_rules/admission_committe',
  '/entrants/areas_of_educational_activity',
  '/entrants/admission_results',
  '/entrants/admission_results/initial_test_results',
  '/entrants/admission_results/specialty_rating',
  '/entrants/admission_results/enrollment_orders',
  '/entrants/calendar',

  '/teaching_field/awards_and_distinctions',
  '/teaching_field/learning_by_teaching',
  '/teaching_field/intelligent_networking',
  '/teaching_field/methodological_case',

  '/student_life/students_rights_and_obligations',
  '/student_life/student_self_government',
  '/student_life/dormitory',
  '/student_life/upbringing_activities',
  '/student_life/extracurricular_activities',
  '/student_life/sports_drive',
  '/student_life/volunteering',
  '/student_life/friendship_width_bnau',
  '/student_life/career',
];

  const staticUrls = staticPages.map(path => ({
    url: `${SITE_URL}${path}`,
  }));

  // динамічні сторінки


let news = [];
let commissions = [];
let clubs = [];
let edu_programs = [];
let intelligent_networking = [];

try {
  [news, commissions, clubs, edu_programs, intelligent_networking] =
    await Promise.all([
      getAllNews(),
      getSubjectCommissionList(),
      getExtracurricularPageData(),
      getIntroductoryQuidePageData(),
      getIntelligentNetworkingPageData()
    ]);
} catch (e) {
  console.error('SITEMAP ERROR:', e);
}



  const newsUrls = (news ?? [])?.filter(item => item?.documentId)?.map(item => ({
    url: `${SITE_URL}/news/${item.documentId}`,
    lastModified: item.updatedAt ? new Date(item.updatedAt) : undefined,
  }));

const commissionUrls = (commissions ?? [])
  .filter(item => item?.category?.code)
  .map(item => ({
    url: `${SITE_URL}/subject_comissions/${item.category.code}`,
    lastModified: item.updatedAt ? new Date(item.updatedAt) : undefined,
  }));


const clubUrls = clubs?.extracurricular_activities_lists
  ?.filter(item => item?.documentId)
  ?.map(item => ({
    url: `${SITE_URL}/student_life/extracurricular_activities/${item.documentId}`,
    lastModified: item.updatedAt ? new Date(item.updatedAt) : undefined,
  })) ?? [];

    const intelligent_networkingUrls = intelligent_networking?.intelligent_networking_activities?.filter(item => item?.documentId)?.map(item => ({
    url: `${SITE_URL}/teaching_field/intelligent_networking/${item?.documentId}`,
    lastModified: item.updatedAt ? new Date(item.updatedAt) : undefined,
  })) ?? [];


  const eduUrLBuilder = (basicUrl)=> {
   return edu_programs?.professions?.filter(item=> item?.slug)?.map(item => ({url: `${SITE_URL}${basicUrl}${item.slug}`,lastModified: item.updatedAt ? new Date(item.updatedAt) : undefined,})) ?? []
  };

  const eduPrograms = eduUrLBuilder('/educational_process/educational_programs/');
  const areasOfEducationalActivity = eduUrLBuilder('/entrants/areas_of_educational_activity/');
  const specialityRating = eduUrLBuilder('/entrants/admission_results/specialty_rating/');
  const enrollmentOrders = eduUrLBuilder('/entrants/admission_results/enrollment_orders/');

  return [
    ...staticUrls,
    ...newsUrls,
    ...commissionUrls,
    ...clubUrls,
    ...eduPrograms,
    ...areasOfEducationalActivity,
    ...specialityRating,
    ...enrollmentOrders,
    ...intelligent_networkingUrls,
  ];
}
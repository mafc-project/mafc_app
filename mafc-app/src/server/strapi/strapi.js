"use server"
import QueryString from "qs";

const baseURL = process.env.STRAPI_URL;



export async function getDepartment(route){
 
const query = QueryString.stringify(
    {populate:"*"},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}

export async function getVolunteeringPageData(route){
 
const query = QueryString.stringify(
    {populate:{
      data: {
        populate: "*"
      },
      news: {
        populate: "*"
      }
    }},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}


export async function getStudentSelfGovernmentPageData(){
  const route ='/api/student-self-government-page';
 
const query = QueryString.stringify(
    {populate:{
      data: {
        populate: "*"
      },
      student_governments: {
        populate: '*'
      },
      news: {
        populate: "*"
      }
    }},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}



export async function getIntelligentNetworkingPageData(){
  const route ='/api/intelligent-networking-page';
 
const query = QueryString.stringify(
    {populate:{
      data: {
        populate: "*"
      },
     images: {
      populate: "*"
     },
     intelligent_networking_activities: {
      populate: {
        activity: {
          populate: "*"
        }
      }
     }
    }},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}


export async function getAwardsAndDistinctionsPage(){
 
  const route = '/api/awards-and-distinction-page';
const query = QueryString.stringify(
    {populate:{
      images: {
        populate: "*"
      }
    }},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}


export async function getLearningByTeachingPage(){
 
  const route = '/api/learning-by-teaching-page';
const query = QueryString.stringify(
    {populate:{
      note: {
        populate: "*"
      }
    }},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}


export async function getDegreeEducationPageData(){
  const route = '/api/degree-education-page';
 
const query = QueryString.stringify(
    {populate: {
      data: {
        populate: "*"
      },
      universities: {
        populate: "*"
      }
    }},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}



export async function getAdmissionCommittePageData(){
const pageRoute='/api/admiddion-committe-page';
const query = QueryString.stringify(
    {populate:"*"},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${pageRoute}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }
    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}

export async function getEducationalCalendar() {
  try {
    const res = await fetch(`${baseURL}/api/admission-calendars?populate=*`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });


    const json = await res.json();

    return json?.data|| null;

  } catch (error) {
    console.error('Error fetching educational calendar:', error);
    return null;
  }
}


export async function getMaterialCharacteristic() {
  try {
    const res = await fetch(`${baseURL}/api/material-technical-base?populate=*`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

    if(!res) return null;

    const json = await res.json();

    return json?.data ?? null;

  } catch (error) {
    console.error('Error fetching material-technical-base:', error);
    return null;
  }
};

export async function getMisionAndGoalsPage() {

   const route = '/api/mission-and-goals-page';

  const query = QueryString.stringify({
  populate: "*"
}, { encodeValuesOnly: true });

  try {
     const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

    if(!res) return null;

    const json = await res.json();

    return json?.data ?? null;

  } catch (error) {
    console.error('Error fetching material-technical-base:', error);
    return null;
  }
};

export async function getCollegeHistoryPage() {

   const route = '/api/college-history-page';

  const query = QueryString.stringify({
  populate: "*"
}, { encodeValuesOnly: true });

  try {
     const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

    if(!res) return null;

    const json = await res.json();

    return json?.data ?? null;

  } catch (error) {
    console.error('Error fetching material-technical-base:', error);
    return null;
  }
};


export async function getCModernWarMuseumPage() {

   const route = '/api/modern-war-museum';

  const query = QueryString.stringify({
  populate: "*"
}, { encodeValuesOnly: true });

  try {
     const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

    if(!res) return null;

    const json = await res.json();

    return json?.data ?? null;

  } catch (error) {
    console.error('Error fetching material-technical-base:', error);
    return null;
  }
};



export async function getNMTData() {
 const route = '/api/nmt';

  const query = QueryString.stringify({
  populate: {
    nmt_link_lists: {
      populate: "*"
    },
    
  },
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching nmt data:', error);
    return null;
  }
};


export async function getDistanceLearningPage() {
  const route = '/api/distance-learning-page';

  const query = QueryString.stringify({
  populate: {
    edu_platform: {
      populate: {
        login_link: true,
        ref_link: true
      }
    },
    video_section: {
      populate: {
        ids: true,
      },
    },
    administrator: {
      populate: "*"
    }
  },
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}


export async function getHusbanryActivityPageData() {
   const route = '/api/husbandry-activity-page';

  const query = QueryString.stringify({
  populate: {
    data: {
      populate: "*"
    },
    images: {
      populate: "*"
    }
  }
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};



export async function getSocialSupportPageData() {
   const route = '/api/social-support-page';

  const query = QueryString.stringify({
  populate: {
    data: {
      populate: "*"
    },
    teacher: {
      populate: "*"
    },
    student_ratings_folder_id: {
      populate: "*"
    },
     link: {
      populate: "*"
    },
  }
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};


export async function getWorkSafetyPageData() {
   const route = '/api/your-safety-page';

  const query = QueryString.stringify({
  populate: {
    data: {
      populate: "*"
    },
    video_item:{
      populate: '*'
    },
    images: {
      populate: "*"
    }
  }
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};



export async function getAccessibilityAndInclusiveLearningPageData() {
   const route = '/api/accessibility-and-inclusive-learning-page';

  const query = QueryString.stringify({
  populate: {
    data: {
      populate: "*"
    },
    insructions:{
      populate: '*'
    },
    images: {
      populate: "*"
    }
  }
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};




export async function getDomitoryPageData() {
  const route = '/api/domitory-page';

  const query = QueryString.stringify({
  populate: {
    data: {
      populate: "*"
    },
    images:{
      populate: '*'
    },
    domitory_governments: {
      populate: "*"
    }
  }
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};


export async function getIntroductoryQuidePageData() {

   const route = '/api/introductory-guide-page';

  const query = QueryString.stringify({
  populate: {
    professions: {
      populate: ['image','discipline','graduate_profile']
    },
    initial_test_results_google_drive_folder:{
      populate: "*"
    },
    enrollment_order_lists:{
      populate: "*"
    },
    entrants_road_map: {
     populate: {
      road_map:{
        populate: "*"
      }
     }
    },
    entrance_exams_info:{
      populate: "*"
    }
    
  },
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching nmt data:', error);
    return null;
  }
};


export async function getConceptualPrinciplesPageData() {

   const route = '/api/conceptual-principles-page';

  const query = QueryString.stringify({
  populate: "*"
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching nmt data:', error);
    return null;
  }
};


export async function getEducationalProgramPageData() {

   const route = '/api/introductory-guide-page';

  const query = QueryString.stringify({
  populate: {
    professions: {
      populate: ['image','discipline','pool']
    },
    
  },
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching nmt data:', error);
    return null;
  }
};



export async function getHomePageData() {

   const route = '/api/home-page';

  const query = QueryString.stringify({
  populate: {
    professions: {
      populate: ['image','discipline']
    },

    hero: {
      populate:['image','link','video']
    },
    government_resourses:{
      populate: "*"
    }
    
  },
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching nmt data:', error);
    return null;
  }
};



export async function getCouncilsAndCommissionPageData() {
 const route = `/api/councils-and-commissions-page`;

  const query = QueryString.stringify({
  populate: "*",
}, { encodeValuesOnly: true });

  try {
      const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching nmt data:', error);
    return null;
  }
};



export async function getExtracurricularPageData() {
 const route = `/api/extracurricular-activities-page`;

  const query = QueryString.stringify({
  populate: {
     extracurricular_activities_lists: {
      populate:{
         activity: {
        populate: '*'
      },
      }
     
    },
     data: {
        populate: "*"
      }
    
  },
}, { encodeValuesOnly: true });

  try {
      const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching nmt data:', error);
    return null;
  }
};

export async function getExtracurricularActiviryItem (id){

  const route = `/api/extracurricular-activities-lists/${id}`;
 const query = QueryString.stringify(
    {
      populate: '*',
    },
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching news item:', error);
    return null;
  }

}

export async function getIntelligentNetworkingActivityItem(id){

  const route = `/api/intelligent-networking-activities/${id}`;
 const query = QueryString.stringify(
    {
      populate: '*',
    },
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching news item:', error);
    return null;
  }

}


export async function getSocialMediaData(pageName) {
 const route = '/api/social-medias';

  const query = QueryString.stringify({

  populate: "*"
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};




export async function getContactsData(pageName) {
 const route = '/api/contacts-pages';

  const query = QueryString.stringify({
  filters: {
        page: {
        $eq: pageName,},
  },
  populate:{
    contacts: {
      populate: "*"
    },
    formTitles:{
      populate: "*"
    }
    
  },
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};


export async function getSubjectCommissionPage() {
   const route = `/api/subject-commission-page`;
 const query = QueryString.stringify(
    {
      populate: {
        subject_commissions_lists: {
          populate: "*"
        },
        
      },
    },
    { encodeValuesOnly: true }
  );
   try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching nmt data:', error);
    return null;
  }
};

export async function getSubjectCommissionData(slug) {
  const route = '/api/subject-commissions-lists'

  const query = QueryString.stringify({
  filters: {
    category:{
      code: {
        $eq: slug,},
    }    
  },
  populate:{
    category: {
      populate: "*"
    },
    members: {
       populate: {
        teacher_info: {populate: ['education', 'teacher_experience']},
        image: {populate: true}
       }
    },
  },
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
  
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching nmt data:', error);
    return null;
  }
};

export async function getSubjectCommissionList() {
  const route = '/api/subject-commissions-lists'

  const query = QueryString.stringify({
  populate:{
    category: {
      populate: "*"
    },
  },
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
  
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching nmt data:', error);
    return null;
  }
};





export async function getAdministration() {
  const route = '/api/administration-page'

  const query = QueryString.stringify({
  populate: {
    organization_structure: {
      populate: "*"
    },
    teachers: {
     populate: "*"
    }
  }
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();
 

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching nmt data:', error);
    return null;
  }
};

export async function getRegulatoryDocumentsPage() {
  const route = '/api/regulatory-documents-page';

  const query = QueryString.stringify({
  populate: "*"
}, { encodeValuesOnly: true });

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

     if(!res) return null;

    const json = await res.json();

    return json?.data || null;

  } catch (error) {
    console.error('Error fetching nmt data:', error);
    return null;
  }
};


export async function getNews(slug, page = 1, pageSize = 4) {
  const route = '/api/news';
  const filters = !slug || slug === 'all'
    ? undefined : {
        categories: {
          code: {
            $containsi: slug,
          },
        },
      };

  const query = QueryString.stringify(
    {
      filters,
      sort: ['date:desc'],
      pagination: {
        page: page,
        pageSize: pageSize,
      },
      populate: '*',
    },
    { encodeValuesOnly: true }
  );

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
     
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();
    

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching news:', error);
    return null;
  }
}


export async function getAllNews() {
  const route = '/api/news';
  const query = QueryString.stringify(
    {
     
      sort: ['date:desc'],
      pagination: {
       limit: 150,
      },
      populate: '*',
    },
    { encodeValuesOnly: true }
  );

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
     
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();
    

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching news:', error);
    return null;
  }
}


export async function getTotalPages(category, page = 1, pageSize = 4) {
  const route = '/api/news';
  const filters = !category || category === 'all'
    ? undefined : {
        categories: {
          code: {
            $containsi: category,
          },
        },
      };

  const query = QueryString.stringify(
    {
      filters,
      sort: ['date:desc'],
      pagination: {
        page: page,
        pageSize: pageSize,
      },
    },
    { encodeValuesOnly: true }
  );

  try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();
    

    return json?.meta || null;
  } catch (error) {
    console.error('Error fetching news:', error);
    return null;
  }
}

export async function getNewsItem (slug){
  const route = `/api/news/${slug}`;
 const query = QueryString.stringify(
    {
      populate: '*',
    },
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching news item:', error);
    return null;
  }

}


export async function getAllCategories (){
  const route = `/api/categories`;
 const query = QueryString.stringify(
    {
      populate: '*',
    },
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching news item:', error);
    return null;
  }

}


export async function getProfessions (){
  const route = `/api/professions`;
 const query = QueryString.stringify(
    {},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}


export async function getEnrollmentOrderBySlug(slug){
  const route = `/api/enrollment-order-lists`;
   const query = QueryString.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: '*',
    },
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}


export async function getProfessionBySlug(slug){
  const route = `/api/professions`;
   const query = QueryString.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        poll: {populate: ['poll_item']},
        discipline: true,
        graduate_profile: true,
        monitoring_and_updating_edu_program_golder_id: true,
        image: true,
        suggestion_box: true}
    },
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}

export async function getLibraryPage (){
  const route = `/api/library`;
 const query = QueryString.stringify(
    {populate: {
      e_libraries: {
        populate: "*"
      },
      work_schedule: {
        populate:"*"
      },
      services: {
        populate:"*"
      },
      images:{
        populate: "*"
      },
      rules: {
        populate:"*"
      },
      dashboard: {
        populate:"*"
      }
      
    },},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}

export async function getVacancyPage(){
  const route = `/api/college-vacancy`;
 const query = QueryString.stringify(
    {populate:{
     companies:{
      populate: "*"
     } 
    },},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}




export async function getCareerPage(){
  const route = `/api/sareer-page`;
 const query = QueryString.stringify(
    {populate:{
     companies:{
      populate: "*"
     } 
    },},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}


export async function getCompaniesList(){
  const route = `/api/companies`;
 const query = QueryString.stringify(
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}

export async function getCompanyData(id){
  const route = `/api/companies/${id}`;
 const query = QueryString.stringify(
    {populate: "*"},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}


export async function getGraduators(){
  const route = `/api/graduators`;
const query = QueryString.stringify(
    {populate: '*',},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}


export async function getBankAccountPage (){
  const route = `/api/bank-account-page`;
 const query = QueryString.stringify(
    {populate: '*',},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}


export async function getCommonPool (){

  const route = '/api/common-pools';
 const query = QueryString.stringify(
    {
      populate: {
        poll_item: {
          populate: "*"
        }
      }
    },
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    if(json?.data && json?.data?.length > 0) {
     const poll_list = json?.data?.map((item)=>item?.poll_item?.poll_item);
     return poll_list
    } else { return json?.data || null;}

   
  } catch (error) {
    console.error('Error fetching news item:', error);
    return null;
  }

}


export async function getMemoryPage (){
  const route = `/api/memory-page`;
 const query = QueryString.stringify(
    {populate: '*',},
    { encodeValuesOnly: true }
  );

try {
    const res = await fetch(`${baseURL}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch. Status: ${res.status}`);
    }

    const json = await res.json();

    return json?.data || null;
  } catch (error) {
    console.error('Error fetching professions:', error);
    return null;
  }

}
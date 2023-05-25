

 export const loader=async()=>{

    const category=await fetch('/jobCategoryList.json');
    const categories=await category.json();

    const featuredJob=await fetch('/featuredJobs.json')
    const features=await featuredJob.json();






    return  {categories,features}  ;




}







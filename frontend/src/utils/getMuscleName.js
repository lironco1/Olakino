export const getMuscleName = (id) => {
  switch (id) {
    case 1:
      return "biceps brachii";
    case 2:
      return "anterior deltoid";
    case 4:
      return "pectoralis major";
    case 11:
      return "biceps femoris";
    case 13:
      return "brachialis";
    case 7:
      return "legs";
    case 8:
      return "gluteus maximus";
    case 12:
      return "latissimus dorsi";
    case 14:
      return "obliquus externus abdominis";
    case 10:
      return "quadriceps femoris";
    case 6:
      return "rectus abdominis";
    case 3:
      return "serratus anterior";
    case 15:
      return "soleus";
    case 9:
      return "trapezius";
    case 5:
      return "triceps brachii";
    default:
      return null;
  }
};

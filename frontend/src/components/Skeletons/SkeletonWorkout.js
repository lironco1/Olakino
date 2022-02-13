import React from 'react'


import SkeletonCard from "components/Skeletons/SkeletonCard";
import SkeletonExercise from './SkeletonExercise';


function SkeletonWorkout() {
    return (
        <>
        <SkeletonExercise />
        <SkeletonExercise />
        <SkeletonExercise />
        </>
    )
}

export default SkeletonWorkout

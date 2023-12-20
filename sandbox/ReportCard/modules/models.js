// modules/models.js
// This file contains the models for the application

class EvaluationItem {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.mark = undefined;
        this.possibleMarks = undefined;
        this.earnedMarks = undefined;
    }
    grade(earnedMarks, possibleMarks) {
        this.possibleMarks = possibleMarks;
        this.earnedMarks = earnedMarks;
        this.mark = (earnedMarks / possibleMarks) * 100;
    }
}

class Course {
    constructor(name, number, grade) {
        this.name = name;
        this.number = number;
        this.grade = grade;
        this.evaluationItems = [];
    }
    addEvaluation(evaluationItem) {
        if (this.getTotalWeight() + evaluationItem.weight > 100) {
            throw new Error('Total weight cannot exceed 100');
        }
        this.evaluationItems.push(evaluationItem);
    }
    removeEvaluation(name) {
        const evaluationItem = this.getEvaluation(name);
        const index = this.evaluationItems.indexOf(evaluationItem);
        if (index > -1) {
            this.evaluationItems.splice(index, 1);
        }
    }
    getEvaluation(name) {
        for (let i = 0; i < this.evaluationItems.length; i++) {
            if (this.evaluationItems[i].name === name) {
                return this.evaluationItems[i];
            }
        }
        return undefined;
    }
    getTotalWeight() {
        let totalWeight = 0;
        for (let i = 0; i < this.evaluationItems.length; i++) {
            totalWeight += this.evaluationItems[i].weight;
        }
        return totalWeight;
    }
}

export { Course, EvaluationItem };



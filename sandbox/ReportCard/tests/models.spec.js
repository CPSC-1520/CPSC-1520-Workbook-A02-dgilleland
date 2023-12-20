import { describe, it, expect } from 'vitest';
import { Course, EvaluationItem } from '../modules/models.js';

describe('Evaluation Item Model', () => {
    it('should create a minimal EvaluationItem object with name and weight', () => {
        const actual = new EvaluationItem('Assignment 1', 10);
        expect(actual.name).toBe('Assignment 1');
        expect(actual.weight).toBe(10);
    });

    it('should have an undefined mark for a minimal EvaluationItem object', () => { 
        const actual = new EvaluationItem('Assignment 1', 10);
        expect(actual.mark).toBe(undefined);
    });

    it('should have an undefined possibleMarks for a minimal EvaluationItem object', () => {
        const actual = new EvaluationItem('Assignment 1', 10);
        expect(actual.possibleMarks).toBe(undefined);
     });

    it('should have an undefined earnedMarks for a minimal EvaluationItem object', () => {
        const actual = new EvaluationItem('Assignment 1', 10);
        expect(actual.earnedMarks).toBe(undefined);
    });
    it('should allow a mark to be assigned to an EvaluationItem object', () => {
        const actual = new EvaluationItem('Assignment 1', 10);
        actual.grade(20,50);
        expect(actual.possibleMarks).toBe(50);
        expect(actual.earnedMarks).toBe(20);
        expect(actual.mark).toBe(40);
    });
});

describe('Course Model', () => {
    it('should create a course object with name, number, and grade', () => {
        const actual = new Course('Vite', '101', 95);
        expect(actual.name).toBe('Vite');
        expect(actual.number).toBe('101');
        expect(actual.grade).toBe(95);
    });
    it('should create a course with name and number only', () => {
        const actual = new Course('Vite', '101');
        expect(actual.name).toBe('Vite');
        expect(actual.number).toBe('101');
        expect(actual.grade).toBe(undefined);
    });
    it('should have an empty array of evaluation items', () => {
        const actual = new Course('Vite', '101');

        expect(actual.evaluationItems).toStrictEqual([]);
    });
    it('should allow an evaluation item to be added to the course', () => {
        const actual = new Course('Vite', '101');
        const evaluationItem = new EvaluationItem('Assignment 1', 10);
        actual.addEvaluation(evaluationItem);

        expect(actual.evaluationItems).toStrictEqual([evaluationItem]);
    });
    it('should calculate the total weight of all evaluation items', () => {
        const actual = new Course('Vite', '101');
        const evaluationItem = new EvaluationItem('Assignment 1', 10);
        actual.addEvaluation(evaluationItem);
        const evaluationItem2 = new EvaluationItem('Assignment 2', 90);
        actual.addEvaluation(evaluationItem2);

        expect(actual.getTotalWeight()).toBe(100);
    });
    it('should reject adding evaluation items whose total will exceed 100', () => {
        const actual = new Course('Vite', '101');
        const evaluationItem = new EvaluationItem('Assignment 1', 10);
        actual.addEvaluation(evaluationItem);
        const evaluationItem2 = new EvaluationItem('Assignment 2', 90);
        const evaluationItem3 = new EvaluationItem('Assignment 3', 1);
        actual.addEvaluation(evaluationItem2);

        expect(() => actual.addEvaluation(evaluationItem3)).toThrow();
    });
    it('should retrieve an evaluation item by its name', () => {
        const actual = new Course('Vite', '101');
        const evaluationItem = new EvaluationItem('Assignment 1', 10);
        actual.addEvaluation(evaluationItem);
        const evaluationItem2 = new EvaluationItem('Assignment 2', 90);
        actual.addEvaluation(evaluationItem2);

        expect(actual.getEvaluation('Assignment 1')).toBe(evaluationItem);
    });
    it('should remove an evaluation item by its name', () => {
        const actual = new Course('Vite', '101');
        const evaluationItem = new EvaluationItem('Assignment 1', 10);
        actual.addEvaluation(evaluationItem);
        const evaluationItem2 = new EvaluationItem('Assignment 2', 90);
        actual.addEvaluation(evaluationItem2);

        actual.removeEvaluation('Assignment 1');

        expect(actual.evaluationItems).toStrictEqual([evaluationItem2]);
    });
    /*
    CORE as a replacement of the CRUD acronym:
    Create      - Create
    Obtain      - Retrieve
    Replace     - Update
    Eliminate   - Delete
    */

});

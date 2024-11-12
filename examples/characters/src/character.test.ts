import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  it(
    'should create a character with a first name, last name, and role',
    () => {
      const firstName = 'John';
      const lastName = 'Smith';
      const role = 2;
      const char = new Character(firstName, lastName, role);

      //First method for testing
      //If you take this approach you need to make sure you are in fact testing everything listed in your description
      expect(char.firstName).toBe(firstName);
      expect(char.lastName).toBe(lastName);
      expect(char.role).toBe(role);

      //Second Method
      //This is good for checking when you are trying to add just a single item to an object
      expect.objectContaining({
        firstName,
        lastName,
        role,
      })

      //Third Method
      //Be really explicit
      //This is hard to debug and fragile (But may be necessary in some cases)
      expect(char).toEqual({
        firstName,
        lastName,
        role,
        strength: expect.any(Number),
        dexterity: expect.any(Number),
        intelligence: expect.any(Number),
        constitution: expect.any(Number),
        charisma: expect.any(Number),
        wisdom: expect.any(Number),
        level: 1,
        lastModified: expect.any(Date),
        createdAt: expect.any(Date),
        id: expect.stringContaining('person-'),
      }) 
    },
  );

  it('should allow you to increase the level', () => {
    const firstName = 'John';
    const lastName = 'Smith';
    const role = 2;
    const char = new Character(firstName, lastName, role);
    const initialLevel = char.level;

    //This is how you can explicitly test that it goes to level 2. 
    char.levelUp();
    expect(char.level).toBe(2);

    //Another method would be if you just want to make sure the level increases
    //This is more flexible and allows for starting at a different level
    //But it could also miss some cases. It wouldn't catch that you only gain one level for example
    expect(char.level).toBeGreaterThan(initialLevel);
  });

  it('should update the last modified date when leveling up', () => {
    const firstName = 'John';
    const lastName = 'Smith';
    const role = 2;
    const char = new Character(firstName, lastName, role);
    const initialLastModifiedDate = char.lastModified; //store this initial value and then make sure it updated

    char.levelUp();
    expect(char.lastModified).not.toBe(initialLastModifiedDate);
  });
});

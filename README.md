# rpg
Text based role player adventure game.

This will be an app written in javascript and using JSON for reading information all inside a web-app wrapper.

Outline of the game:

A player creates his/her character from different races and fighting style. 
Each race and fighting style has its own base attributes. Additionally, each has its own bonus points for certain attributes which are determined by rolling the appropriate dice.
Once the character is created the adventure starts.

The player must travel around the world and complete different tasks, while building up his attributes and collecting various items, weapons, and spells.

Character attributes should be in the format:
strength, speed, dexterity, magic, mana, recovery, hit points(life)
Each race should have default values for each. Hit points or life is the maximum amount of damage character can take and remain alive. Hit points and mana are recovered at a rate based on the recovery attribute or while sleeping.

Weapon attributes should be in the format:
name, strength, speed, dexterity, magic, mana, chance to hit, min damage, max damage, number of dice, number of sides

Spell attributes should be in the format:
name, strength, speed, dexterity, magic, mana, chance to cast, min damage, max damage, number of dice, number of sides

Armor attributes should be in the format:
name, strength, speed, dexterity, magic, mana, chance to block, min protection, max protection

Items will be in a similar format, but may vary depending on the type of item that it is.

Weapons, armor, and items may have bonuses for different attributes which are added to the characters attributes. The attributes for weapons, spells, and armor are the minimum requirements that a character must have to be able to use the item. The character can still possess the item, but may not be able to use it until later.

A character should be able to equip items and also have a pack to store other items. Bonus attributes of items are only added to the character if that item is equipped. An item should not be able to be equipped if the character does not meet the minimum requirements of that item before it is equipped. You cannot use that items bonus to be able to use it in the first place.

describe('basic tests for javascript singly linked list', () => {
        let list = null;
        beforeEach(() => {
            list = new SinglyLinkedList();
        });

        it('should start out with an empty list', () => {
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
            expect(list.length).toEqual(0);
        });

        it('should be able to add a single item to the end of the list', () => {
            list.addToTail('Learn');
            expect(list.head).not.toBeNull();
            expect(list.tail).not.toBeNull();
            expect(list.head.value).toEqual('Learn');
            expect(list.tail.value).toEqual('Learn');
            expect(list.length).toBeGreaterThan(0);
        });
        it('should have a null next item at the tail after adding a single item', () => {
            list.addToTail('Learn');
            expect(list.tail.value).toEqual('Learn');
            expect(list.length).toBeGreaterThan(0);
            expect(list.tail.next).toBeNull();
        });
        it('should have a null next item at the head after adding a single item', () => {
            list.addToTail('Learn');
            expect(list.head.value).toEqual('Learn');
            expect(list.tail.value).toEqual('Learn');
            expect(list.length).toBeGreaterThan(0);
            expect(list.head.next).toBeNull();
        });
        it('should be able to add multiple items to the list', () => {
            list.push('first');
            list.push('second');
            list.push('third');
            expect(list.head).not.toBeNull();
            expect(list.tail).not.toBeNull();
            expect(list.head.value).toEqual('first');
            expect(list.tail.value).toEqual('third');
            expect(list.length).toBeGreaterThan(0);
        });
        it('should have a null next item at the tail after adding multiple items', () => {
            list.push('first');
            list.push('second');
            list.push('third');
            expect(list.tail.value).toEqual('third');
            expect(list.length).toBeGreaterThan(0);
            expect(list.tail.next).toBeNull();
        });
        it('should have the first item that points to the second item when you add multiple items', () => {
            list.push('first');
            list.push('second');
            list.push('third');
            expect(list.head.next).not.toBeNull();
            expect(list.head.next.value).toEqual('second');
            expect(list.head.value).toEqual('first');

        });
        it('should have a next-to-last item that points to the last item when you add multiple items', () => {
            list.push('first');
            list.push('second');
            list.push('third');
            list.push('fourth');
            expect(list.head.next).not.toBeNull();
            expect(list.head.next.next.value).toEqual('third');//direct accessor
            expect(list.tail.value).toEqual('fourth');

        });
    });
    describe('basic tests for index based operations', () => {
            let list = null;
            beforeEach(() => {
                list = new SinglyLinkedList();
                list.push('ONE');
                list.push('TWO');
                list.push('THREE');
                list.push('FOUR');
                list.push('FIVE');
                list.push('SIX');
            });
            it('should return null when given negative index or index greater than or equal to the length of list', () => {
                let item = list.get(-1);
                expect(item).toBeNull();
            });
            it('should return null when given index greater than the length of list', () => {
                let item = list.get(list.length + 2);
                expect(item).toBeNull();
            });
            it('should return null when given index greater than to the length of list', () => {
                let item = list.get(list.length);
                expect(item).toBeNull();
            });
            it('should return first item when given index of 0', () => {
                let item = list.get(0);
                expect(item).toEqual(list.head);
                expect(item.value).toEqual('ONE');
            });
            it('should return fourth item when given index of 3', () => {
                let item = list.get(3);
                expect(item).not.toBeNull();
                expect(item.value).toEqual('FOUR');
            });

    });
    describe('tests for delete or remove operations', () => {
        let list = null;
        beforeEach(() => {
            list = new SinglyLinkedList;
            list.push('ONE');
            list.push('TWO');
            list.push('THREE');
            list.push('FOUR');
            list.push('FIVE');
            list.push('SIX');
        });
        
    });


/**
 * Created by lzw on 6/4/17.
 */
import {expect} from 'chai';
import {List,Map} from 'immutable';


describe('immutability',()=>{
    describe('number',()=>{
        function increment(curNum){
            return curNum+1;
        }

        it('is immutable', ()=>{
            let curNum = 56;
            let nextNum = increment(curNum);
            expect(nextNum).to.equal(57);
            expect(curNum).to.equal(56);
        })
    });

    describe('A List', () => {

        function addSong(currentState, song) {
            return currentState.push(song);
        }

        it('is immutable', () => {
            let curState = List.of('Bad Day', 'Counting Star');
            let nextState = addSong(curState, 'Cry On My Shoulder');

            expect(nextState).to.equal(List.of(
                'Bad Day',
                'Counting Star',
                'Cry On My Shoulder'
            ));
            expect(curState).to.equal(List.of(
                'Bad Day',
                'Counting Star',
            ));
        });

    });

    describe('a tree', () => {

        function addSong(currentState, song) {
            return currentState.set(
                'songs',
                currentState.get('songs').push(song)
            );
        }

        function addSong2(currentState, song) {
            return currentState.update('songs', songs => songs.push(song));
        }

        it('is immutable', () => {
            let curState = Map({
                songs: List.of('Bad Day', 'Counting Star')
            });
            let nextState = addSong2(curState, 'Cry On My Shoulder');

            expect(nextState).to.equal(Map({
                songs: List.of(
                    'Bad Day',
                    'Counting Star',
                    'Cry On My Shoulder'
                )
            }));
            expect(curState).to.equal(Map({
                songs: List.of(
                    'Bad Day',
                    'Counting Star',
                )
            }));
        });

    });

});
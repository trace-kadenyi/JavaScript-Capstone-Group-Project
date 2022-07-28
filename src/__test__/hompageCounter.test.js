 /**
 * @jest-environment jsdom
 */

  import countitems from '../modules/homepageCounter.js';
  import fetchMock from 'jest-fetch-mock';
  fetchMock.enableMocks();

  
  test('returns the count', async () => {   
                const myArray = [
                    { id: 1, title: 'Moana'},
                    { id: 2, title: 'Mulan'},
                    { id: 3, title: 'The Lion King'},
                    { id: 4, title: 'Eternal Sunshine of the Spotless Mind'},
                  ];
                
    fetch.mockResponseOnce(myArray)

    const counts = await countitems();
    expect(counts).toHaveLength(18);
    
  });


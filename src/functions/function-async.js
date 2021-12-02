export async function asyncGetPeople(url) 
{
    try 
    {
      return await fetch(url);
    }
    catch (exception)
    {
      return exception;
    }
}
